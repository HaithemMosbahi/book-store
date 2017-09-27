// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCJeroYmtkQNDSbUd2swScFQzwZlV-cXiQ",
    authDomain: "reactive-book-store.firebaseapp.com",
    databaseURL: "https://reactive-book-store.firebaseio.com",
    projectId: "reactive-book-store",
    storageBucket: "reactive-book-store.appspot.com",
    messagingSenderId: "113405193809"
  }
};
