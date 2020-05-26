import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransactionResponse } from 'src/app/interfaces/transactionResponse';
import { IClientResponse } from 'src/app/interfaces/clientResponse';
import { IBookResponse } from 'src/app/interfaces/bookResponse';
import { Pacient } from 'src/app/classes/pacient';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

  @Input() deleteID: string;
  constructor(private transactionService: TransactionService,
              private router: Router) { }

  deletetransaction(){
     this.transactionService.deletetransaction(this.deleteID)
                        .subscribe(response => this.processResponse(response),
                                   error => alert(error.message));

      console.log("Deleted ID" + this.deleteID);
  }

  
  deleteClient(){
    this.transactionService.deleteClient(this.deleteID)
                       .subscribe(response => this.processResponseClient(response),
                                  error => alert(error.message));

     console.log("Deleted ID" + this.deleteID);
 }

 
 deleteBook(){
  this.transactionService.deleteBook(this.deleteID)
                     .subscribe(response => this.processResponseBook(response),
                                error => alert(error.message));

   console.log("Deleted ID" + this.deleteID);
}

  processResponse(response: ITransactionResponse){
    this.router.navigate(['transactions-list']);
  }

  processResponseClient(response: IClientResponse){
    this.router.navigate(['clients-list']);
  }

  processResponseBook(response: IBookResponse){
    this.router.navigate(['books-list']);
  }

  ngOnInit(): void {
  }

}
