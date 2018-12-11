import { Injectable } from '@angular/core';

import {
  TnsOAuthClient
} from 'nativescript-linkedin-oauth2';

@Injectable()
export class AuthService {
  private client: TnsOAuthClient = null;

  constructor() { }

  public tnsOauthLogin(): Promise<string> {
    this.client = new TnsOAuthClient();

    return new Promise<string>((resolve, reject) => {
      this.client.loginWithCompletion(
        (accessCode: string, error) => {
          if (error) {
            console.error('back to main page with error: ');
            console.error(error);
            reject(error);
          } else {
            console.log('back to main page with access token: ');
            console.log(accessCode);
            resolve(accessCode);
          }
        }
      );
    });
  }

  public tnsOauthLogout() {
    if (this.client) {
      this.client.logout();
    }
  }
}
