import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import { Book } from '../interfaces/book';
import { Client } from '../interfaces/client';
import { Pacient } from '../classes/pacient';
import { Url } from '../classes/url';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ITransactionResponse } from '../interfaces/transactionResponse';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  urlSelectTransaction = new Url();
  urlSelectBook = new Url();
  urlTransactions;
  urlBooks;
  urlClients;

   constructor(private http: HttpClient) {
    }

  addTransaction(transaction: Transaction){
    this.urlTransactions = this.urlSelectTransaction.getUrlAddtransaction();

    return this.http.post<ITransactionResponse>(`${this.urlTransactions}`, transaction)
                    .pipe(catchError(this.errorHandler));
  }

  deletetransaction(id: string){
    this.urlTransactions = this.urlSelectTransaction.getUrlDeletetransaction();

    return this.http.delete<ITransactionResponse>(`${this.urlTransactions}/${id}`)
                    .pipe(catchError(this.errorHandler));
  }

  getTransactionAfterId(id: string): Observable<Transaction>{
    this.urlTransactions = this.urlSelectTransaction.getUrlGettransactionAfterId();

    return this.http.get<Transaction>(`${this.urlTransactions}/${id}`)
                    .pipe(catchError(this.errorHandler));
  }


  // updatePacientInfo(pacient: Pacient){
  //   this.url = this.urlSelect.getUrlUpdatetransaction();

  //   return this.http.put<ITransactionResponse>(`${this.url}/${pacient.id}`, pacient)
  //                   .pipe(catchError(this.errorHandler));
  // }

  gettransactions(): Observable<Transaction[]> {
    this.urlTransactions = this.urlSelectTransaction.getUrlGettransactions();
    return this.http.get<Transaction[]>(this.urlTransactions);
  }
  
  getbooks(): Observable<Book[]> {
    this.urlBooks = this.urlSelectBook.getUrlGetbooks();
    return this.http.get<Book[]>(this.urlBooks);
  }

  getclients(): Observable<Client[]> {
    this.urlClients = this.urlSelectBook.getUrlGetclients();
    return this.http.get<Client[]>(this.urlClients);
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
