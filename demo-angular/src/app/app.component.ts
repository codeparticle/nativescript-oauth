import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'ns-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  public onTapLogin() {
    this.authService
      .tnsOauthLogin()
      .then((result: string) => {
        console.log('back to app component with token' + result);
      });
  }

  public onTapLogout() {
    this.authService.tnsOauthLogout();
  }
}
