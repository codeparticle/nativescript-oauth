"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tns_oauth_utils_1 = require("./tns-oauth-utils");
var TnsOAuthLoginSubController = (function () {
    function TnsOAuthLoginSubController(client) {
        this.client = client;
    }
    TnsOAuthLoginSubController.prototype.preLoginSetup = function (frame, completion) {
        this.frame = frame;
        this.completion = completion;
        return tns_oauth_utils_1.getAuthUrlStr(this.client.provider);
    };
    TnsOAuthLoginSubController.prototype.resumeWithUrl = function (url, completion) {
        var authCode = tns_oauth_utils_1.authorizationCodeFromRedirectUrl(url);
        this.completion && this.completion(authCode, null);
        completion && completion(authCode, null);
        this.completion = null;
        return true;
    };
    return TnsOAuthLoginSubController;
}());
exports.TnsOAuthLoginSubController = TnsOAuthLoginSubController;
//# sourceMappingURL=tns-oauth-login-sub-controller.js.map