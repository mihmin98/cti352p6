import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Transaction } from 'src/app/interfaces/transaction';
import { Client } from 'src/app/interfaces/client';
import { Book } from 'src/app/interfaces/book';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransactionResponse } from 'src/app/interfaces/transactionResponse';
import { IClientResponse } from 'src/app/interfaces/clientResponse';
import { IBookResponse } from 'src/app/interfaces/bookResponse';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  transactions: Transaction[];
  newtransaction: Transaction;

  clients: Client[];
  newClient: Client;

  books: Book[];
  newBook: Book;

  addForm: FormGroup;
  clientForm: FormGroup;
  bookForm: FormGroup;

  errorMsg;

  submitted = false;
  submittedClient = false;
  submittedBook = false;

  title = 'Add';

  constructor(private transactionService: TransactionService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private formBuilderClient: FormBuilder,
              private formBuilderBook: FormBuilder ) {
  }

  addtransaction(transaction: Transaction){
    this.transactionService.addTransaction(transaction)
                       .subscribe(response => this.processResponse(response),
                                  error => alert(error.message));
  }

  addClient(client: Client){
    this.transactionService.addClient(client)
                       .subscribe(response => this.processResponseClient(response),
                                  error => alert(error.message));
  }

  addBook(book: Book){
    this.transactionService.addBook(book)
                       .subscribe(response => this.processResponseBook(response),
                                  error => alert(error.message));
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
  
      clientId: ['', [Validators.required]],
      bookId: ['', [Validators.required]],
      price: ['',  [Validators.required, Validators.pattern('^[0-9]+(\.?[0-9]+)?$')]],
      rentalDate: ['', [Validators.required, Validators.pattern('^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$')]],
      returnDate: ['', [Validators.required, Validators.pattern('^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$')]],
      rentalDuration: ['']
    });

    this.clientForm = this.formBuilderClient.group({
  
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')] ],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')] ],
      email: ['', [Validators.required] ]
     
    });

    this.bookForm = this.formBuilderBook.group({
  
      title: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')] ],
      authorId:['', [Validators.required]],
      publicationDate: ['', [Validators.required, Validators.pattern('^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$')]],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]+(\.?[0-9]+)?$')] ],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }
  get fClient() { return this.clientForm.controls; }
  get fBook() { return this.bookForm.controls; }

  onSubmit(): void {
    this.submitted = true;

       // stop here if form is invalid
    if (this.addForm.invalid) {
         return;
      }

    this.newtransaction = this.addForm.value;
    this.addtransaction(this.newtransaction);
    console.log("--------------------------------------------------------");
  }


  
  onSubmitClient(): void {
    this.submittedClient = true;

       // stop here if form is invalid
    if (this.clientForm.invalid) {
         return;
      }

    this.newClient = this.clientForm.value;
    this.addClient(this.newClient);

    console.log("--------------------------------------------------------");
  }

  
  onSubmitBook(): void {
    this.submittedBook = true;

       // stop here if form is invalid
    if (this.bookForm.invalid) {
         return;
      }

    this.newBook = this.bookForm.value;
    this.addBook(this.newBook);
  }

  onReset() {
    this.submitted = false;
    this.addForm.reset();
  }


  onResetClient() {
    this.submittedClient = false;
    this.clientForm.reset();
  }

  onResetBook() {
    this.submittedBook = false;
    this.bookForm.reset();
  }

  processResponse(response: ITransactionResponse){
    response.logError = true;
    if (response.logError === true){
      if (response.error.length === 0){
        alert('The transaction was added!\n');
        this.onReset();
      }
      else{
        let errors = '';
        for (let i = 0; i < response.error.length ; i++ ){
          errors += response.error[i] + '\n';
        }
        alert('The following fields have invalid information:\n\n' + errors);
      }

    }
    else{
      alert('To Add a transaction must be login!');
      this.router.navigate(['login']);
    }
  }

  processResponseClient(response: IClientResponse){
    response.logError = true;
    if (response.logError === true){
      if (response.error.length === 0){
        alert('The client was added!\n');
        this.onResetClient();
      }
      else{
        let errors = '';
        for (let i = 0; i < response.error.length ; i++ ){
          errors += response.error[i] + '\n';
        }
        alert('The following fields have invalid information:\n\n' + errors);
      }

    }
    else{
      alert('To Add a client must be login!');
      this.router.navigate(['login']);
    }
  }

  processResponseBook(response: IBookResponse){
    response.logError = true;
    if (response.logError === true){
      if (response.error.length === 0){
        alert('The book was added!\n');
        this.onResetBook();
      }
      else{
        let errors = '';
        for (let i = 0; i < response.error.length ; i++ ){
          errors += response.error[i] + '\n';
        }
        alert('The following fields have invalid information:\n\n' + errors);
      }

    }
    else{
      alert('To Add a book must be login!');
      this.router.navigate(['login']);
    }
  }
}
