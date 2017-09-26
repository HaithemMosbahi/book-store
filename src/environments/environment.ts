// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDLnMiY2Z-ryrI1y1ksuESwJYwUgr-YwNQ',
    authDomain: 'ngrx-posts.firebaseapp.com',
    databaseURL: 'https://ngrx-posts.firebaseio.com',
    projectId: 'ngrx-posts',
    storageBucket: '',
    messagingSenderId: '785548733476'
  }
};
