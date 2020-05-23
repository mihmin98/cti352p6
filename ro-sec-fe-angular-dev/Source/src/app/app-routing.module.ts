import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddComponent } from './components/add/add.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  //{path: 'update/:id', component: UpdateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'transactions-list', component: TransactionsComponent},
  //{path: 'book&client-list', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
// UpdateComponent,
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  AddComponent,
  TransactionsComponent
];
