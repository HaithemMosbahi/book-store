# Reactive BookStore

The aim of this project is to build a modular and scalable application using Angular and Redux. 

A live demo is hosted on Firebase : [https://reactive-book-store.firebaseapp.com/catalog/list)](https://reactive-book-store.firebaseapp.com/catalog/list)

Technology Stack : 

![alt text](documentation/technology-stack.png "Technology Stack")


* Angular 4
* RxJS 5
* NgRx 4
* Material Design 
* Firebase


The goal of the architecture and structure used in this application is to ensure :

* Scalability
* Modularity
* Separation of concerns ( less logic in the UI )
* Framework agnostic ( Yes The same architecture would be easy to implement in React or Vue)
* Easy for newcomers
* Maintainability ( Redux => Time Traveller Debugger => ) 
* Be Reactive  => Everything should be a stream

This sample application includes the following features : 

* Modular application
* State Management
* Routing
* Lazy loading
* Reactive forms & validations
* Backend communication
* Real Time experience using WebSockets
* Testing
* Material design


# Application Modules 
The application is splitted into several modules. The image below represents the modules implemented in this application.

![alt text](documentation/app-modules.png "Application Modules")

# Module Architecture
Every module in the application is following the architecture below : 

![alt text](documentation/module-architecture.png "Application Modules")




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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
