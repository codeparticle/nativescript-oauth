"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_view_1 = require("tns-core-modules/ui/web-view");
var page_1 = require("tns-core-modules/ui/page");
var grid_layout_1 = require("tns-core-modules/ui/layouts/grid-layout");
var action_bar_1 = require("tns-core-modules/ui/action-bar/action-bar");
var tns_oauth_login_sub_controller_1 = require("./tns-oauth-login-sub-controller");
var TnsOAuthLoginWebViewController = (function () {
    function TnsOAuthLoginWebViewController() {
        this.loginController = null;
    }
    TnsOAuthLoginWebViewController.initWithClient = function (client) {
        var instance = new TnsOAuthLoginWebViewController();
        if (instance) {
            instance.loginController = new tns_oauth_login_sub_controller_1.TnsOAuthLoginSubController(client);
        }
        return instance;
    };
    TnsOAuthLoginWebViewController.prototype.loginWithParametersFrameCompletion = function (frame, completion) {
        var fullUrl = this.loginController.preLoginSetup(frame, completion);
        this.loginInternalWithParametersCompletion(fullUrl, frame);
    };
    TnsOAuthLoginWebViewController.prototype.loginInternalWithParametersCompletion = function (fullUrl, frame) {
        this.goToWebViewPage(frame, fullUrl);
    };
    TnsOAuthLoginWebViewController.prototype.goToWebViewPage = function (frame, url) {
        var _this = this;
        frame.navigate(function () { return _this.createWebViewPage(url); });
    };
    TnsOAuthLoginWebViewController.prototype.createWebViewPage = function (url) {
        var _this = this;
        var webView = this.createWebView(url, this.pageLoadStarted.bind(this), this.pageLoadFinished.bind(this));
        var grid = new grid_layout_1.GridLayout();
        grid.addChild(webView);
        var page = new page_1.Page();
        page.content = grid;
        var navBtn = new action_bar_1.NavigationButton();
        navBtn.text = 'Done';
        page.actionBar.navigationButton = navBtn;
        page.addEventListener('navigatingFrom', function () {
            _this.loginController.completion && _this.loginController.completion(null, null);
        });
        return page;
    };
    TnsOAuthLoginWebViewController.prototype.createWebView = function (url, loadStarted, loadFinished) {
        var webView = new web_view_1.WebView();
        webView.on('loadStarted', loadStarted);
        webView.on('loadFinished', loadFinished);
        webView.src = url;
        return webView;
    };
    TnsOAuthLoginWebViewController.prototype.resumeWithUrl = function (url) {
        var _this = this;
        return this.loginController.resumeWithUrl(url, function () { return _this.loginController.frame.goBack(); });
    };
    TnsOAuthLoginWebViewController.prototype.pageLoadStarted = function (args) {
        console.log('WebView loadStarted ' + args.url);
        var redirectUri = this.loginController.client.provider.options.redirectUri;
        var splitUri = redirectUri.split('?');
        var correctUri = splitUri[0] + "/?" + splitUri.slice(1).join('');
        if (args.url.startsWith(correctUri)) {
            this.resumeWithUrl(args.url);
        }
    };
    TnsOAuthLoginWebViewController.prototype.pageLoadFinished = function (args) {
        console.log('WebView loadFinished ' + args.url);
    };
    return TnsOAuthLoginWebViewController;
}());
exports.TnsOAuthLoginWebViewController = TnsOAuthLoginWebViewController;
//# sourceMappingURL=tns-oauth-login-webview-controller.js.map