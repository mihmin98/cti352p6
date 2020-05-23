import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { Book } from '../../interfaces/book';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Client } from 'src/app/interfaces/client';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];
  selectedtransaction: Transaction;

  books: Book[];
  selectedbook: Book;

  clients: Client[];
  selectedclient: Client;

  onSelectTransaction(transaction: Transaction): void{
    this.selectedtransaction = transaction;
  }

  onSelectBook(book: Book): void{
    this.selectedbook = book;
  }

  onSelectClient(client: Client): void{
    this.selectedclient = client;
  }

  constructor(private transactionService: TransactionService,
              private router: Router) { }

  ngOnInit(): void {
    this.gettransactions();
    this.getbooks();
    this.getclients();
  }

  gettransactions(): void {
    this.transactionService.gettransactions()
      .subscribe(transactions => this.transactions = transactions);
  }
  getbooks(): void {
    this.transactionService.getbooks()
      .subscribe(books => this.books = books);
  }

  getclients(): void {
    this.transactionService.getclients()
      .subscribe(clients => this.clients = clients);
  }

  // update(id: string){
  //     this.router.navigate(['update', id]);
  // }
}
