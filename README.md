# LemediaDons

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment

```
bundle install
```

### Test environment: dons-lemedia.ghribi.net

Your public key is required on server.

```
bundle exec cap testing deploy
```

Test cards : https://stripe.com/docs/testing

### Configure GCloud function

```
firebase functions:config:set donation_stripe_test.secret_token="<secret stripe live key test>"
firebase functions:config:set donation_stripe.secret_token="<secret stripe live key test>"
```

### Generate GitHub page / zip to deploy

```
ng build --output-path dist  --env=production --aot=true --sourcemaps=false
```
