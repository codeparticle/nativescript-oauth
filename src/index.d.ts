/// <reference path='./providers/providers.d.ts' />
import { Frame } from 'tns-core-modules/ui/frame';
import { LoadEventData } from 'tns-core-modules/ui/web-view/web-view';
import { TnsOaProviderLinkedIn } from './providers';

export type TnsOAuthClientLoginBlock = (
  accessCode: string,
  error
) => void;
export type TnsOAuthPageLoadStarted = (args: LoadEventData) => void;
export type TnsOAuthPageLoadFinished = (args: LoadEventData) => void;

export declare class TnsOAuthClient {
  // private loginController;
  provider: TnsOaProviderLinkedIn;
  constructor();
  loginWithCompletion(completion?: TnsOAuthClientLoginBlock): void;
  resumeWithUrl(url: string): void;
  logout(successPage?: string): void;
  // private removeCookies();
}

export function configureTnsOAuth(provider: TnsOaProviderLinkedIn): void;

export interface ITnsOAuthLoginController {
  loginWithParametersFrameCompletion(
    frame: Frame,
    completion?: TnsOAuthClientLoginBlock
  );
  resumeWithUrl(url: string);
}
