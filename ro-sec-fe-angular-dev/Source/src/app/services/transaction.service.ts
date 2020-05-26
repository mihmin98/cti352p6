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
import { IClientResponse } from '../interfaces/clientResponse';
import { IBookResponse } from '../interfaces/bookResponse';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  urlSelectTransaction = new Url();
  urlSelectBook = new Url();
  urlSelectClient = new Url();

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

  addClient(client: Client){
    this.urlClients = this.urlSelectClient.getUrlAddClient();

    return this.http.post<IClientResponse>(`${this.urlClients}`, client)
                    .pipe(catchError(this.errorHandler));
  }

  addBook(book: Book){
    this.urlBooks = this.urlSelectBook.getUrlAddBook();

    return this.http.post<IBookResponse>(`${this.urlBooks}`, book)
                    .pipe(catchError(this.errorHandler));
  }

  deletetransaction(id: string){
    this.urlTransactions = this.urlSelectTransaction.getUrlDeletetransaction();

    return this.http.delete<ITransactionResponse>(`${this.urlTransactions}/${id}`)
                    .pipe(catchError(this.errorHandler));
  }

  deleteClient(id: string){
    this.urlClients = this.urlSelectClient.getUrlDeleteClient();

    return this.http.delete<IClientResponse>(`${this.urlClients}/${id}`)
                    .pipe(catchError(this.errorHandler));
  }

  deleteBook(id: string){
    this.urlBooks = this.urlSelectBook.getUrlDeleteBook();

    return this.http.delete<IBookResponse>(`${this.urlBooks}/${id}`)
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
