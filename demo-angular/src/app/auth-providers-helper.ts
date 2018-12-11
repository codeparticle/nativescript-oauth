import {
    configureTnsOAuth
} from 'nativescript-linkedin-oauth2';
import {
    TnsOaProviderLinkedIn,
    TnsOaProviderOptions
} from 'nativescript-linkedin-oauth2/providers';

export function configureOAuthProviders() {
    const linkedinProvider: TnsOaProviderOptions = {
        clientId: '78658ai9ykpbuw',
        redirectUri: 'https://inkdigitalnetworking.com?dev=true&linkedinAuth=true'
    };

    configureTnsOAuth(new TnsOaProviderLinkedIn(linkedinProvider));
}
