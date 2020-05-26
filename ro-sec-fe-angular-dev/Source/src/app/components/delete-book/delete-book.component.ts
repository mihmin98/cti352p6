import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransactionResponse } from 'src/app/interfaces/transactionResponse';
import { IClientResponse } from 'src/app/interfaces/clientResponse';
import { IBookResponse } from 'src/app/interfaces/bookResponse';
import { Pacient } from 'src/app/classes/pacient';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  @Input() deleteID: string;
  constructor(private transactionService: TransactionService,
              private router: Router) { }

 
  
  deleteBook(){
    this.transactionService.deleteBook(this.deleteID)
                       .subscribe(response => this.processResponseBook(response),
                                  error => alert(error.message));

     console.log("Deleted ID" + this.deleteID);
 }

 
 processResponseBook(response: IBookResponse){
    this.router.navigate(['books-list']);
  }

  ngOnInit(): void {
  }

}
