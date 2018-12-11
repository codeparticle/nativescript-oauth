"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TnsOaProviderLinkedIn = (function () {
    function TnsOaProviderLinkedIn(options) {
        this.authority = 'https://www.linkedin.com';
        this.authorizeEndpoint = '/oauth/v2/authorization';
        this.cookieDomains = ['linkedin.com'];
        this.options = options;
    }
    return TnsOaProviderLinkedIn;
}());
exports.TnsOaProviderLinkedIn = TnsOaProviderLinkedIn;
//# sourceMappingURL=providers.js.map