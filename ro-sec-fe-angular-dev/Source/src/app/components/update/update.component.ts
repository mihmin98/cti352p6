// import { Component, OnInit } from '@angular/core';
// import { Pacient } from 'src/app/classes/pacient';
// import { ActivatedRoute, Resolve } from '@angular/router';
// import { Router } from '@angular/router';
// import { TransactionService } from 'src/app/services/transaction.service';
// import { ITransactionResponse } from 'src/app/interfaces/transactionResponse';

// @Component({
//   selector: 'app-update',
//   templateUrl: './update.component.html',
//   styleUrls: ['./update.component.css']
// })
// export class UpdateComponent implements OnInit {
//   title = 'Update pacient';
//   genders = ['Male', 'Female'];

//   pacient = new Pacient();
//   errorMsg;
//   pacientId;

//   constructor(private transactionService: TransactionService,
//               private router: Router,
//               private route: ActivatedRoute) {
//     this.pacientId = this.route.snapshot.paramMap.get('id');
//     this.getPacientInfo(this.pacientId);
//    }

//   getPacientInfo(id: string){
//     this.transactionService.getPacientAfterId(id)
//                 .subscribe(data => this.pacient = data,
//                            error => alert(error.message));
//   }

//   updatePacient(pacient: Pacient){
//     this.transactionService.updatePacientInfo(pacient)
//                   .subscribe(response => this.processResponse(response),
//                              error => alert(error.message));
//   }

//   processResponse(response: ITransactionResponse){
//     response.logError = true;
//     if (response.logError === true){
//       if (response.error.length === 0){
//         alert('The transaction information have been updated!');
//         this.router.navigate(['transactions-list']);
//       }
//       else{
//         let errors = '';
//         for (let i = 0; i < response.error.length ; i++ ){
//           errors += response.error[i] + '\n';
//         }
//         alert('The following fields have invalid information:\n\n' + errors);
//       }

//     }
//     else{
//       alert('To update a transaction must be login!');
//       this.router.navigate(['login']);
//     }
//   }

//   ngOnInit(): void {
//   }
// }
