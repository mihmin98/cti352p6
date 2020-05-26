import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransactionResponse } from 'src/app/interfaces/transactionResponse';
import { IClientResponse } from 'src/app/interfaces/clientResponse';
import { IBookResponse } from 'src/app/interfaces/bookResponse';
import { Pacient } from 'src/app/classes/pacient';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  @Input() deleteID: string;
  constructor(private transactionService: TransactionService,
              private router: Router) { }

 
  
  deleteClient(){
    this.transactionService.deleteClient(this.deleteID)
                       .subscribe(response => this.processResponseClient(response),
                                  error => alert(error.message));

     console.log("Deleted ID" + this.deleteID);
 }

 
 processResponseClient(response: IClientResponse){
    this.router.navigate(['clients-list']);
  }

  ngOnInit(): void {
  }

}
