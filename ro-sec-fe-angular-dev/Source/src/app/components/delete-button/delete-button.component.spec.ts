// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { DeleteButtonComponent } from './delete-button.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { DebugElement, Component } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { TransactionService } from 'src/app/services/transaction.service';

// describe('DeleteButtonComponent', () => {
//   let component: DeleteButtonComponent;
//   let fixture: ComponentFixture<DeleteButtonComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DeleteButtonComponent ],
//       imports: [ RouterTestingModule ],
//     providers: [ {provide: TransactionService, useClass: DelteServiceStub} ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DeleteButtonComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have one Delete button', () => {
//     const buttonEl = fixture.debugElement.query(By.css('button'));
//     expect(buttonEl.nativeElement.textContent).toEqual('Delete');
//   });

//   it('should delete transaction on click event', () => {
//     component.deleteID = '1';
//     const buttonEl: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
//     spyOn(component, 'deletetransaction');
//     if (buttonEl.textContent === 'Delete'){
//         buttonEl.click(); }
//     expect(component.deletetransaction).toHaveBeenCalledTimes(1);
//   });
// });

// class DelteServiceStub{
//     // deletetransaction(id: number){
//     //     return undefined;
//     // }
// }
