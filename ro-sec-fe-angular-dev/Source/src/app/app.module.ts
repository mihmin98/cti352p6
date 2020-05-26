import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { TransactionService } from './services/transaction.service';
import { UserService } from './services/user.service';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    DeleteButtonComponent,
    DeleteClientComponent,
    DeleteBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TransactionService,
              UserService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
