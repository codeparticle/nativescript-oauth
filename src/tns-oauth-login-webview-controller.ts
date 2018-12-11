import { Frame } from 'tns-core-modules/ui/frame';
import { WebView, LoadEventData } from 'tns-core-modules/ui/web-view';
import { Page } from 'tns-core-modules/ui/page';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { NavigationButton } from 'tns-core-modules/ui/action-bar/action-bar';
import {
  TnsOAuthClient,
  TnsOAuthClientLoginBlock,
  TnsOAuthPageLoadStarted,
  TnsOAuthPageLoadFinished
} from './index';
import {
  ITnsOAuthLoginController,
  TnsOAuthLoginSubController
} from './tns-oauth-login-sub-controller';

export class TnsOAuthLoginWebViewController
  implements ITnsOAuthLoginController {
  private loginController: TnsOAuthLoginSubController = null;

  public static initWithClient(client: TnsOAuthClient) {
    const instance = new TnsOAuthLoginWebViewController();

    if (instance) {
      instance.loginController = new TnsOAuthLoginSubController(client);
    }

    return instance;
  }

  public loginWithParametersFrameCompletion(frame: Frame, completion?: TnsOAuthClientLoginBlock) {
    const fullUrl = this.loginController.preLoginSetup(frame, completion);

    this.loginInternalWithParametersCompletion(fullUrl, frame);
  }

  private loginInternalWithParametersCompletion(fullUrl: string, frame: Frame): void {
    this.goToWebViewPage(frame, fullUrl);
  }

  private goToWebViewPage(frame: Frame, url: string) {
    frame.navigate(() => this.createWebViewPage(url));
  }

  private createWebViewPage(url: string): Page {
    const webView = this.createWebView(
      url,
      this.pageLoadStarted.bind(this),
      this.pageLoadFinished.bind(this)
    );
    const grid = new GridLayout();
    grid.addChild(webView);

    const page = new Page();
    page.content = grid;

    const navBtn = new NavigationButton();
    navBtn.text = 'Done';
    page.actionBar.navigationButton = navBtn;
    page.addEventListener('navigatingFrom', () => {
      this.loginController.completion && this.loginController.completion(null, null);
    });

    return page;
  }

  private createWebView(
    url: string,
    loadStarted: TnsOAuthPageLoadStarted,
    loadFinished: TnsOAuthPageLoadFinished
  ): WebView {
    const webView = new WebView();

    webView.on('loadStarted', loadStarted);
    webView.on('loadFinished', loadFinished);
    webView.src = url;

    return webView;
  }

  public resumeWithUrl(url: string): boolean {
    return this.loginController.resumeWithUrl(
      url,
      () => this.loginController.frame.goBack()
    );
  }

  private pageLoadStarted(args: LoadEventData) {
    console.log('WebView loadStarted ' + args.url);

    const { redirectUri } = this.loginController.client.provider.options;
    const splitUri = redirectUri.split('?');
    const correctUri = `${splitUri[0]}/?${splitUri.slice(1).join('')}`;

    if (args.url.startsWith(correctUri)) {
      this.resumeWithUrl(args.url);
    }
  }

  private pageLoadFinished(args: LoadEventData) {
    console.log('WebView loadFinished ' + args.url);
  }
}
