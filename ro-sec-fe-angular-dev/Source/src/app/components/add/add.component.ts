import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Transaction } from 'src/app/interfaces/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransactionResponse } from 'src/app/interfaces/transactionResponse';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  transactions: Transaction[];
  newtransaction: Transaction;
  addForm: FormGroup;
  errorMsg;
  submitted = false;
  title = 'Add';

  constructor(private transactionService: TransactionService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

  addtransaction(transaction: Transaction){
    this.transactionService.addTransaction(transaction)
                       .subscribe(response => this.processResponse(response),
                                  error => alert(error.message));
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      // firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')] ],
      // lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')] ],
      // cnp: ['',  [Validators.required, Validators.pattern('[0-9]{13}')]],
      // seria: ['',  [Validators.required, Validators.pattern('[a-zA-Z]{2}')]],
      // number: ['',  [Validators.required, Validators.pattern('[0-9]{6}')]],
      // gender: ['', Validators.required],
      // dob: ['', [Validators.required, Validators.pattern('^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$')]],
      // supplier:  ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')] ],
      // subscription: [''],
      // obs: [''],
      // history: ['']
      clientId: ['', [Validators.required]],
      bookId: ['', [Validators.required]],
      price: ['',  [Validators.required, Validators.pattern('^[0-9]+(\.?[0-9]+)?$')]],
      rentalDate: ['', [Validators.required, Validators.pattern('^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$')]],
      returnDate: ['', [Validators.required, Validators.pattern('^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$')]],
      rentalDuration: ['']

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit(): void {
    this.submitted = true;

       // stop here if form is invalid
    if (this.addForm.invalid) {
         return;
      }

    this.newtransaction = this.addForm.value;
    this.addtransaction(this.newtransaction);
  }

  onReset() {
    this.submitted = false;
    this.addForm.reset();
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
}
