import * as querystring from 'querystring';
import * as UrlLib from 'url';
import { TnsOaProvider } from './providers';

export function getAuthUrlStr(provider: TnsOaProvider): string {
  if (provider.getAuthUrlStr) {
    return provider.getAuthUrlStr();
  }

  const params = {
    'client_id': provider.options.clientId,
    'response_type': 'code',
    'redirect_uri': provider.options.redirectUri,
    'scope': (provider.options.scopes || []).join(' '),
    'response_mode': 'query',
    'state': 'abcd',
  };

  return `${provider.authority}${provider.authorizeEndpoint}?${querystring.stringify(params)}`;
}

export function authorizationCodeFromRedirectUrl(url: string): string {
  let authorizationCode: string = null;

  if (url) {
    const parsedRetStr = UrlLib.parse(url);
    const qsObj = querystring.parse(parsedRetStr.query);

    authorizationCode = qsObj.code;
  }

  return authorizationCode;
}

export function nsArrayToJSArray(a) {
  const arr = [];
  if ('undefined' !== typeof a) {
    const count = a.count;
    for (let i = 0; i < count; i++) {
      arr.push(a.objectAtIndex(i));
    }
  }
  return arr;
}

export function jsArrayToNSArray<T>(str) {
  return NSArray.arrayWithArray<T>(str);
}
