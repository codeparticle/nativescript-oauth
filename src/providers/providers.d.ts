export interface TnsOaProviderOptions {
  clientId: string;
  redirectUri: string;
  scopes?: string[];
}

export interface TnsOaProvider {
  options: TnsOaProviderOptions;

  authority: string;
  authorizeEndpoint: string;
  cookieDomains: string[];

  getAuthUrlStr?(): string;
}

export declare class TnsOaProviderLinkedIn implements TnsOaProvider {
  options: TnsOaProviderOptions;
  authority: string;
  authorizeEndpoint: string;
  cookieDomains: string[];
  constructor(options: TnsOaProviderOptions);
}
