"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var querystring = require("querystring");
var UrlLib = require("url");
function getAuthUrlStr(provider) {
    if (provider.getAuthUrlStr) {
        return provider.getAuthUrlStr();
    }
    var params = {
        'client_id': provider.options.clientId,
        'response_type': 'code',
        'redirect_uri': provider.options.redirectUri,
        'scope': (provider.options.scopes || []).join(' '),
        'response_mode': 'query',
        'state': 'abcd',
    };
    return "" + provider.authority + provider.authorizeEndpoint + "?" + querystring.stringify(params);
}
exports.getAuthUrlStr = getAuthUrlStr;
function authorizationCodeFromRedirectUrl(url) {
    var authorizationCode = null;
    if (url) {
        var parsedRetStr = UrlLib.parse(url);
        var qsObj = querystring.parse(parsedRetStr.query);
        authorizationCode = qsObj.code;
    }
    return authorizationCode;
}
exports.authorizationCodeFromRedirectUrl = authorizationCodeFromRedirectUrl;
function nsArrayToJSArray(a) {
    var arr = [];
    if ('undefined' !== typeof a) {
        var count = a.count;
        for (var i = 0; i < count; i++) {
            arr.push(a.objectAtIndex(i));
        }
    }
    return arr;
}
exports.nsArrayToJSArray = nsArrayToJSArray;
function jsArrayToNSArray(str) {
    return NSArray.arrayWithArray(str);
}
exports.jsArrayToNSArray = jsArrayToNSArray;
//# sourceMappingURL=tns-oauth-utils.js.map