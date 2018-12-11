import * as definition from '../providers';

export class TnsOaProviderLinkedIn implements definition.TnsOaProvider {
  public options: definition.TnsOaProviderOptions;
  public authority = 'https://www.linkedin.com';
  public authorizeEndpoint = '/oauth/v2/authorization';
  public cookieDomains = ['linkedin.com'];

  constructor(options: definition.TnsOaProviderOptions) {
    this.options = options;
  }
}
