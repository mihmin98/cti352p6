import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { By } from '@angular/platform-browser';
import { TransactionService } from 'src/app/services/transaction.service';


describe('transactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsComponent ],
      imports: [ HttpClientModule,
                 AppRoutingModule
                 ],
      providers: [{provide: TransactionService}]

    })
    .compileComponents();
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a selected transaction after click on a transaction', () => {
    component.onSelectTransaction(component.transactions[0]);
    fixture.detectChanges();
    expect(component.selectedtransaction).not.toBeNull();
  });

  it('should have a selected client after click on a client', () => {
    component.onSelectClient(component.clients[0]);
    fixture.detectChanges();
    expect(component.selectedclient).not.toBeNull();
  });

  it('should have a selected book after click on a book', () => {
    component.onSelectBook(component.books[0]);
    fixture.detectChanges();
    expect(component.selectedbook).not.toBeNull();
  });


  it ('should not contain any button tags before click on a transaction', () => {
    const buttonEdit = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonEdit.length).toBe(0);
    const buttonDelete = fixture.debugElement.queryAll(By.css('app-delete-button'));
    expect(buttonDelete.length).toBe(0);
  });

  it ('should not contain any button tags before click on a client', () => {
    const buttonEdit = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonEdit.length).toBe(0);
    const buttonDelete = fixture.debugElement.queryAll(By.css('app-delete-client'));
    expect(buttonDelete.length).toBe(0);
  });

  it ('should not contain any button tags before click on a book', () => {
    const buttonEdit = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonEdit.length).toBe(0);
    const buttonDelete = fixture.debugElement.queryAll(By.css('app-delete-book'));
    expect(buttonDelete.length).toBe(0);
  });


  it('should contain a delete button after a transaction is clicked', () => {
    component.onSelectTransaction(component.transactions[0]);
    fixture.detectChanges();

    const buttonDelete = fixture.debugElement.queryAll(By.css('app-delete-button'));
    expect(buttonDelete.length).toBe(1);
  });

  it('should contain a delete button after a client is clicked', () => {
    component.onSelectClient(component.clients[0]);
    fixture.detectChanges();

    const buttonDelete = fixture.debugElement.queryAll(By.css('app-delete-client'));
    expect(buttonDelete.length).toBe(1);
  });

  it('should contain a delete button after a book is clicked', () => {
    component.onSelectBook(component.books[0]);
    fixture.detectChanges();

    const buttonDelete = fixture.debugElement.queryAll(By.css('app-delete-book'));
    expect(buttonDelete.length).toBe(1);
  });

  it ('should not contain any detalis before click on a transaction/client/book', () => {
    const buttonEle = fixture.debugElement.queryAll(By.css('.detalis'));
    expect(buttonEle.length).toBe(0);
  });

  it ('should contain detalis after click on a transaction', () => {
    component.onSelectTransaction(component.transactions[0]);
    fixture.detectChanges();

    const buttonEle = fixture.debugElement.queryAll(By.css('.details'));
    expect(buttonEle.length).toBe(1);
  });

  it ('should contain detalis after click on a client', () => {
    component.onSelectClient(component.clients[0]);
    fixture.detectChanges();

    const buttonEle = fixture.debugElement.queryAll(By.css('.details'));
    expect(buttonEle.length).toBe(1);
  });

  it ('should contain detalis after click on a book', () => {
    component.onSelectBook(component.books[0]);
    fixture.detectChanges();

    const buttonEle = fixture.debugElement.queryAll(By.css('.details'));
    expect(buttonEle.length).toBe(1);
  });

});
