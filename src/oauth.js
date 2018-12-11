"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platformModule = require("tns-core-modules/platform");
var frameModule = require("tns-core-modules/ui/frame");
var tns_oauth_login_webview_controller_1 = require("./tns-oauth-login-webview-controller");
var tns_oauth_utils_1 = require("./tns-oauth-utils");
var provider = null;
var TnsOAuthClient = (function () {
    function TnsOAuthClient() {
        this.provider = null;
        this.provider = provider;
        if (provider) {
            this.loginController = tns_oauth_login_webview_controller_1.TnsOAuthLoginWebViewController.initWithClient(this);
        }
    }
    TnsOAuthClient.prototype.loginWithCompletion = function (completion) {
        if (this.provider) {
            this.loginController.loginWithParametersFrameCompletion(frameModule.topmost(), completion);
        }
        else {
            completion(null, 'Provider is not configured');
        }
    };
    TnsOAuthClient.prototype.logout = function (successPage) {
        this.removeCookies();
        if (successPage) {
            var navEntry = {
                moduleName: successPage,
                clearHistory: true
            };
            frameModule.topmost().navigate(navEntry);
        }
    };
    TnsOAuthClient.prototype.resumeWithUrl = function (url) {
        this.loginController.resumeWithUrl(url);
    };
    TnsOAuthClient.prototype.removeCookies = function () {
        var _this = this;
        if (platformModule.isIOS) {
            var cookieArr = tns_oauth_utils_1.nsArrayToJSArray(NSHTTPCookieStorage.sharedHTTPCookieStorage.cookies);
            for (var i = 0; i < cookieArr.length; i++) {
                var cookie = cookieArr[i];
                for (var j = 0; j < this.provider.cookieDomains.length; j++) {
                    if (cookie.domain.endsWith(this.provider.cookieDomains[j])) {
                        NSHTTPCookieStorage.sharedHTTPCookieStorage.deleteCookie(cookie);
                    }
                }
            }
            var dataStore_1 = WKWebsiteDataStore.defaultDataStore();
            dataStore_1.fetchDataRecordsOfTypesCompletionHandler(WKWebsiteDataStore.allWebsiteDataTypes(), function (records) {
                var cookieArr = tns_oauth_utils_1.nsArrayToJSArray(records);
                var _loop_1 = function (k) {
                    var cookieRecord = cookieArr[k];
                    for (var l = 0; l < _this.provider.cookieDomains.length; l++) {
                        if (cookieRecord.displayName.endsWith(_this.provider.cookieDomains[l])) {
                            dataStore_1.removeDataOfTypesForDataRecordsCompletionHandler(cookieRecord.dataTypes, tns_oauth_utils_1.jsArrayToNSArray([cookieRecord]), function () {
                                console.log("Cookies for " + cookieRecord.displayName + " deleted successfully");
                            });
                        }
                    }
                };
                for (var k = 0; k < cookieArr.length; k++) {
                    _loop_1(k);
                }
            });
        }
        else if (platformModule.isAndroid) {
            var cookieManager = android.webkit.CookieManager.getInstance();
            if (cookieManager.removeAllCookies) {
                var cm23 = cookieManager;
                cm23.removeAllCookies(null);
                cm23.flush();
            }
            else if (cookieManager.removeAllCookie) {
                cookieManager.removeAllCookie();
                cookieManager.removeSessionCookie();
            }
        }
    };
    return TnsOAuthClient;
}());
exports.TnsOAuthClient = TnsOAuthClient;
function configureTnsOAuth(p) {
    provider = p;
}
exports.configureTnsOAuth = configureTnsOAuth;
//# sourceMappingURL=oauth.js.map