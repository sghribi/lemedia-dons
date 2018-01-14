// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.production.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  stripePublicKey: 'pk_test_svl3Ly5YYHJBY1b3dWZr1xgC',
  stripeMode: 'test',
  apiEndPoint: 'https://us-central1-le-media.cloudfunctions.net/registerDonation',
};
