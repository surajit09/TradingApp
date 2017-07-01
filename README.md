# TradingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

To run the app, go to folder where app has been downloaded. 
Then type “ng serve” which will spring up a dev server locally for the app 
and then in the browser type  http://localhost:4200/

## Description
1)	This app shows currency trading data for an imaginary client. The data for the client is stored in the local json files 
    in the data folder and corresponding service files such as client.service.ts has the code to bring back data ()
    and the data is retrieved using local storage feature of html.
2)	The “todo” node in the second tab in the navigation brings back fake todo list for the client 
    from an url which can  provide fake json data. The purpose for this is to demonstrate the use 
    of rxjs library which is very good for data streaming. Please check todos.service.ts 
    file for the details.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
