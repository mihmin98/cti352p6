import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AddComponent } from './add.component';
import { By } from '@angular/platform-browser';
import { fakeAsync } from '@angular/core/testing';
import { TransactionService } from 'src/app/services/transaction.service';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      imports: [ BrowserModule,
                 HttpClientModule,
                 AppRoutingModule,
                 RouterTestingModule,
                 ReactiveFormsModule,
                 FormsModule
                 ],
      providers: [{provide: TransactionService}]


    })
     .compileComponents();
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  }));
  afterEach(() => {
    fixture.destroy();
  });


  it('should create', () => {
    expect(AddComponent).toBeTruthy();
  });

  it('should have title Add', () => {
    expect(component.title).toEqual('Add');
  });

  it('Add form should be valid', () => {
    const itemClientId= component.addForm.controls.clientId;
    itemClientId.setValue('2');

    const itemmBookId = component.addForm.controls.bookId;
    itemmBookId.setValue('2');

    const itemPrice = component.addForm.controls.price;
    itemPrice.setValue('12');

    const itemRentalDate = component.addForm.controls.rentalDate;
    itemRentalDate.setValue('1998-03-05');

    const itemReturnDate = component.addForm.controls.returnDate;
    itemReturnDate.setValue('1998-03-05');

    const itemSupplier = component.addForm.controls.rentalDuration;
    itemSupplier.setValue('3');

    expect(component.addForm.valid).toBeTruthy();
  });

  it('Book form should be valid', () => {
    const itemTitle= component.bookForm.controls.title;
    itemTitle.setValue('Titlul');

    const itemAuthorId = component.bookForm.controls.authorId;
    itemAuthorId.setValue('2');

    const itemPublicationDate = component.bookForm.controls.publicationDate;
    itemPublicationDate.setValue('1998-03-05');

    const itemQuantity = component.bookForm.controls.quantity;
    itemQuantity.setValue('19');

    expect(component.bookForm.valid).toBeTruthy();
  });


  it('Client form should be valid', () => {
    const itemFirstName= component.clientForm.controls.firstName;
    itemFirstName.setValue('Ioana');

    const itemLastName = component.clientForm.controls.lastName;
    itemLastName.setValue('Ciripan');

    const itemEmail = component.clientForm.controls.email;
    itemEmail.setValue('ioanaciripan@gmail.com');

    expect(component.clientForm.valid).toBeTruthy();
  });



  it('should not be valid when birthdate doesn t have date format', () => {
    const  item = component.addForm.controls.rentalDate;
    item.setValue('1234567');

    expect(item.valid).toBeFalsy();
  });

  it('should not be valid when birthdate have date format but is not a valid date', () => {
    const  item = component.addForm.controls.rentalDate;
    item.setValue('30/33/2021');

    expect(item.valid).toBeFalsy();
  });

  it('should  be valid when birthdate have date format and is a valid date', () => {
    const  item = component.addForm.controls.rentalDate;
    item.setValue('1990-02-02');

    expect(item.valid).toBeTruthy();
  });


  it('should not be valid when birthdate doesn t have date format', () => {
    const  item = component.addForm.controls.returnDate;
    item.setValue('1234567');

    expect(item.valid).toBeFalsy();
  });

  it('should not be valid when birthdate have date format but is not a valid date', () => {
    const  item = component.addForm.controls.returnDate;
    item.setValue('30/33/2021');

    expect(item.valid).toBeFalsy();
  });

  it('should  be valid when birthdate have date format and is a valid date', () => {
    const  item = component.addForm.controls.returnDate;
    item.setValue('1990-02-02');

    expect(item.valid).toBeTruthy();
  });

  it ('should contain 6 button tags', () => {
    const buttonEle = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonEle.length).toBe(6);
  });

  it ('should contain 13 input tags', () => {
    const buttonEle = fixture.debugElement.queryAll(By.css('input'));
    expect(buttonEle.length).toBe(13);
  });

  it ('should contain 3 form tag', () => {
    const buttonEle = fixture.debugElement.queryAll(By.css('form'));
    expect(buttonEle.length).toBe(3);
  });

  it('should call function addtransaction', fakeAsync(() => {
    spyOn(component, 'addtransaction');

    component.addtransaction(null);
    expect(component.addtransaction).toHaveBeenCalled();
  }));


  it ('should call function onReset()', () => {
    const button = fixture.debugElement.nativeElement.querySelector('#cancelButton');
    button.click();
    fixture.detectChanges();
    expect(component.submitted).toBe(false);

  });


});
