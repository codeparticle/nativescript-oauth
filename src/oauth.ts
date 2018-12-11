import * as platformModule from 'tns-core-modules/platform';
import * as frameModule from 'tns-core-modules/ui/frame';

import {
  TnsOAuthClientLoginBlock,
  ITnsOAuthLoginController
} from './index';
import { TnsOaProviderLinkedIn } from './providers';
import { TnsOAuthLoginWebViewController } from './tns-oauth-login-webview-controller';
import { nsArrayToJSArray, jsArrayToNSArray } from './tns-oauth-utils';

let provider = null;

export class TnsOAuthClient {
  public provider: TnsOaProviderLinkedIn = null;
  private loginController: ITnsOAuthLoginController;

  public constructor() {
    this.provider = provider;

    if (provider) {
      this.loginController = TnsOAuthLoginWebViewController.initWithClient(this);
    }
  }

  public loginWithCompletion(completion?: TnsOAuthClientLoginBlock) {
    if (this.provider) {
      this.loginController.loginWithParametersFrameCompletion(
        frameModule.topmost(),
        completion
      );
    } else {
      completion(null, 'Provider is not configured');
    }
  }

  public logout(successPage?: string) {
    this.removeCookies();

    if (successPage) {
      let navEntry: frameModule.NavigationEntry = {
        moduleName: successPage,
        clearHistory: true
      };
      frameModule.topmost().navigate(navEntry);
    }
  }

  public resumeWithUrl(url: string) {
    this.loginController.resumeWithUrl(url);
  }

  private removeCookies(): void {
    if (platformModule.isIOS) {
      let cookieArr = nsArrayToJSArray(
        NSHTTPCookieStorage.sharedHTTPCookieStorage.cookies
      );
      for (let i = 0; i < cookieArr.length; i++) {
        const cookie: NSHTTPCookie = <NSHTTPCookie>cookieArr[i];
        for (let j = 0; j < this.provider.cookieDomains.length; j++) {
          if (cookie.domain.endsWith(this.provider.cookieDomains[j])) {
            NSHTTPCookieStorage.sharedHTTPCookieStorage.deleteCookie(cookie);
          }
        }
      }

      const dataStore = WKWebsiteDataStore.defaultDataStore();
      dataStore.fetchDataRecordsOfTypesCompletionHandler(
        WKWebsiteDataStore.allWebsiteDataTypes(),
        records => {
          const cookieArr = <WKWebsiteDataRecord[]>nsArrayToJSArray(records);

          for (let k = 0; k < cookieArr.length; k++) {
            const cookieRecord = cookieArr[k];
            for (let l = 0; l < this.provider.cookieDomains.length; l++) {
              if (
                cookieRecord.displayName.endsWith(
                  this.provider.cookieDomains[l]
                )
              ) {
                dataStore.removeDataOfTypesForDataRecordsCompletionHandler(
                  cookieRecord.dataTypes,
                  jsArrayToNSArray([cookieRecord]),
                  () => {
                    console.log(
                      `Cookies for ${
                        cookieRecord.displayName
                      } deleted successfully`
                    );
                  }
                );
              }
            }
          }
        }
      );
    } else if (platformModule.isAndroid) {
      let cookieManager = android.webkit.CookieManager.getInstance();
      if ((<any>cookieManager).removeAllCookies) {
        let cm23 = <any>cookieManager;
        cm23.removeAllCookies(null);
        cm23.flush();
      } else if (cookieManager.removeAllCookie) {
        cookieManager.removeAllCookie();
        cookieManager.removeSessionCookie();
      }
    }
  }
}

export function configureTnsOAuth(p: TnsOaProviderLinkedIn) {
  provider = p;
}
