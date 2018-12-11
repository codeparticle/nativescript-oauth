import { Frame } from 'tns-core-modules/ui/frame';

import {
  TnsOAuthClient,
  TnsOAuthClientLoginBlock
} from './index';
import {
  getAuthUrlStr,
  authorizationCodeFromRedirectUrl
} from './tns-oauth-utils';

export interface ITnsOAuthLoginController {
  loginWithParametersFrameCompletion(
    frame: Frame,
    completion?: TnsOAuthClientLoginBlock
  );
  resumeWithUrl(url: string);
}

export class TnsOAuthLoginSubController {
  public completion: TnsOAuthClientLoginBlock;
  public client: TnsOAuthClient;
  public frame: Frame;

  constructor(client: TnsOAuthClient) {
    this.client = client;
  }

  public preLoginSetup(frame: Frame, completion?: TnsOAuthClientLoginBlock): string {
    this.frame = frame;
    this.completion = completion;

    return getAuthUrlStr(this.client.provider);
  }

  public resumeWithUrl(url: string, completion?: TnsOAuthClientLoginBlock): boolean {
    const authCode = authorizationCodeFromRedirectUrl(url);

    this.completion && this.completion(authCode, null);
    completion && completion(authCode, null);
    this.completion = null;

    return true;
  }
}
