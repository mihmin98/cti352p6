import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ITransactionResponse } from 'src/app/interfaces/transactionResponse';
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

  processResponse(response: ITransactionResponse){
    this.router.navigate(['transactions-list']);
    // response.logError = true;
    // if (response.logError === true){
    //   if (response.error.length === 0){
    //     alert('The transaction was deleted!\n');
    //     this.router.navigate(['transactions-list']);
    //   }
    //   else{
    //     let errors = '';
    //     for (let i = 0; i < response.error.length ; i++ ){
    //       errors += response.error[i] + '\n';
    //     }
    //     alert('The delete operation fail debause of:\n\n' + errors);
    //   }

    // }
    // else{
    //   alert('To Deelte a transaction must be login!');
    //   this.router.navigate(['login']);
    // }
  }

  ngOnInit(): void {
  }

}
