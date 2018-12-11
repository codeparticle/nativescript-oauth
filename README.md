# LinkedIn OAuth 2 Plugin for NativeScript

## Usage

If you want a quickstart, you can start with one of two demo apps:

- [Angular Demo App](https://github.com/alexziskind1/nativescript-oauth2/tree/master/demo-angular)

### Bootstrapping

When your app starts up, you'll have to register one or more auth providers to use with the nativescript-oauth2 plugin. You'll use the code below to register the providers.

#### NativeScript Core

If you are using NativeScript Core, open `app.ts` and add the following registration code before `application.start();`

#### NativeScript with Angular

If you are using Angular AND you are NOT using `<page-router-outlet`, you'll need to enable frames in order for the plugin to open up a new native page with a login screen. To do that open your `main.ts` file. You will need to explicitly use frames, so make sure to pass an options object to `platformNativeScriptDynamic` with the `createFrameOnBootstrap` flag set to `true`, like this.

```typescript
// main.ts
platformNativeScriptDynamic({ createFrameOnBootstrap: true }).bootstrapModule(
  AppModule
);
```

You don't need to do this if you already have `<page-router-outlet>` in your component.

then add add the registration code below somewhere before you call login, most likely in your Auth service, as in the demo-angular project.

#### NativeScript-Vue

If you are using NativeScript-Vue, then you'll have to add this registration code somewhere when your app bootstraps. A Vue demo app is included with the GitHub repo.

```typescript
// This is the provider registration example code

import { configureTnsOAuth } from 'nativescript-oauth2';

import {
  TnsOaProvider,
  TnsOaProviderLinkedIn,
  TnsOaProviderOptions
} from 'nativescript-oauth2/providers';

function configureOAuthProviderLinkedIn(): TnsOaProvider {
  const linkedinProviderOptions: TnsOaProviderOptions = {
    clientId: '691208554415641',
    redirectUri: 'https://www.linkedin.com/connect/login_success.html',
    scopes: ['email']
  };
  const linkedinProvider = new TnsOaProviderLinkedIn(linkedinProviderOptions);
  return linkedinProvider;
}

configureTnsOAuth(configureOAuthProviderLinkedIn());
```

The plugin comes with helpful interfaces that you can implement for the providers as well as the options that can be passed into each provider's constructor. You don't have to use these interfaces, but they are helpful guides. The code above shows these interfaces.

The last call to `configureTnsOAuth()` takes an array of providers and registers them as available for use.

### Logging in

When you're ready to login, or as a response to a tap event on a login button, you can create a new instance of the `TnsOAuthClient` and call `loginWithCompletion()` on the instance.

```typescript
import { TnsOAuthClient, ITnsOAuthTokenResult } from 'nativescript-oauth2';

const client = new TnsOAuthClient(providerType);

client.loginWithCompletion((accessCode: string, error) => {
  if (error) {
    console.error('back to main page with error: ');
    console.error(error);
  } else {
    console.log('back to main page with access code: ');
    console.log(accessCode);
  }
});
```

After login is done, the completion handler will be called with the results.
