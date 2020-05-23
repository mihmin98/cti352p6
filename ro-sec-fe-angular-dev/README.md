# RO-SEC-FE-Angular
 This project can be found at https://gitlab.com/ro-sec-train/ro-sec-frontend/ro-sec-fe-angular

## Front-end application
Clone the project: https://gitlab.com/ro-sec-train/ro-sec-frontend/ro-sec-fe-angular.git <br>
cd `ro-sec-fe-angular\Source`<br>
Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code generation

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running unit tests with code coverage

Run `ng test --code-coverage` to execute the unit tests via [Karma](https://karma-runner.github.io).<br>
This command with generate `coverage\Source` folder.
To see code coverage report open file `index.html` from `coverage\Source` in  brower.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running json server
To run application without back-end application, a json server can be use.<br>
To install json server run `npm install -g json-server`<br>
To start json server run `json-server src\assets\jsonServer\jsonServer.json --port 3500`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Front-end transaction application description

This project starting point was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.
The project files structure is resemble with file structure of a generated project with the following differences:
- The folder `Source\src\app\components` contain the components.
- The folder `Source\src\app\services` contain the services.
- The folder `Source\src\app\interfaces` contan the interfaces.
- The folder `Source\src\app\class` contain the classes.

### Components description
#### 1. Update 
Update component is responsible to update transaction information.<br>
Update component is route component with route `/update/<id>`.<br>
Update component have the following files:<br>
- `update.component.css`<br> - 'brower style implementation.<br>
- `update.component.html`<br> - 'browser page implementation'<br>
- `update.component.spec.ts`<br> - unit tests implementation.<br>
- `update.component.ts`<br> - logic implementation.<br>
In route `/update/<id>` is display navbarlogout and a form with transaction information.
transaction form information contain:<br>
- `tile` - Update transaction.<br>
- `transactionID` - transaction id from database.<br>
- `firstName` - transaction first name, this field is required and 
                 must be characters with lenght greater that 3.<br> 
- `lastName` - transaction last name, this field is required and 
                must be characters with lenght greater that 3.<br>

#### 2. Login 
Login component is responsible to login registered user.<br>
Login component is route component with route `/login`.<br>
Login component have the following files:<br>
- `login.component.css`<br> - 'brower style implementation.<br>
- `login.component.html`<br> - 'browser page implementation'<br>
- `login.component.spec.ts`<br> - unit tests implementation.<br>
- `login.component.ts`<br> - logic implementation.<br>

#### 3. Register 
Register component is responsible to add new user.<br>
Register component is route component with route `/register`.<br>
Register component have the following files:<br>
- `register.component.css`<br> - 'brower style implementation.<br>
- `register.component.html`<br> - 'browser page implementation'<br>
- `register.component.spec.ts`<br> - unit tests implementation.<br>
- `register.component.ts`<br> - logic implementation.<br>

### Services description
#### 1. Update Service
Update service is responsible of two operations.<br>
- send request for transaction information after ID to backend.<br>
- send request to update transaction information to backend.<br>

Update service have two files:
- `update.service.spec.ts` - unit test implementation.<br>
- `update.service.ts` - logic implementation.<br>

Update service contain the following function:
- `getPacientAfterId(id: number): Observable<Pacient>`- send request for transaction infomation to backend.<br>
- `updatePacientInfo(pacient: Pacient)` - send reuest to update pacient information to backend.<br>
- `errorHandler(error: HttpErrorResponse)` - handler the errors receive backend.<br>

#### 2. Delete service
Delete service is responsible to request to delete a transaction information after ID to backend.<br>
Delete service have two files:
- `delete.service.spec.ts` - unit test implementation.<br>
- `delete.service.ts` - logic implementation.<br>

Delete service contain following function:<br>
- `deletetransaction(id: number)` - send request to delete transaction to backend.<br>
- `errorHandler(error: HttpErrorResponse)` - handler the errors receive backend.<br>

#### 3. Login service
Login service is responsible to request to authentificate user after email and password to backend.<br>
Login service have two files:
- `login.service.spec.ts` - unit test implementation.<br>
- `login.service.ts` - logic implementation.<br>

Login service contain following function:<br>
- `loginUser(email: string, password: string)` - send request to authentificate user to backend.<br>
- `errorHandler(error: HttpErrorResponse)` - handler the errors receive backend.<br>

#### 4. Register service
Register service is responsible to request to add user to backend.<br>
Register service have two files:
- `register.service.spec.ts` - unit test implementation.<br>
- `register.service.ts` - logic implementation.<br>

Register service contain following function:<br>
- `registerUser(user: User)` - send request to add user to backend.<br>
- `errorHandler(error: HttpErrorResponse)` - handler the errors receive backend.<br>

### Interfaces description
#### 1. transaction
- `id: number`<br>
- `firstName: string`<br>
- `lastName: string`<br>
- `cnp: string`<br>
- `seria: string`<br>
- `number: string`<br>
- `gender: string`<br>
- `dob: string`<br>
- `supplier: string`<br>
- `subscription: string`<br>
- `obs: string`<br>
- `history: string`<br>

#### 2. User
- `id: number`<br>
- `firstName: string`<br>
- `lastName: string`<br>
- `email: string`<br>
- `password: string`<br>

### Classes description
#### 1. transaction
- `id: number`<br>
- `firstName: string`<br>
- `lastName: string`<br>
- `cnp: string`<br>
- `seria: string`<br>
- `number: string`<br>
- `gender: string`<br>
- `dob: string`<br>
- `supplier: string`<br>
- `subscription: string`<br>
- `obs: string`<br>
- `history: string`<br>

#### 2. User
- `id: number`<br>
- `firstName: string`<br>
- `lastName: string`<br>
- `email: string`<br>
- `password: string`<br>