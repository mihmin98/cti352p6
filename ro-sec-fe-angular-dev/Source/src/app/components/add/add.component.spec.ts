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

  it('form should be valid', () => {
    const itemFirstName = component.addForm.controls.firstName;
    itemFirstName.setValue('ssss');

    const itemLastName = component.addForm.controls.lastName;
    itemLastName.setValue('Fdgregr');

    const itemCnp = component.addForm.controls.cnp;
    itemCnp.setValue('1234567890123');

    const itemSeria = component.addForm.controls.seria;
    itemSeria.setValue('AZ');

    const itemNumber = component.addForm.controls.number;
    itemNumber.setValue('102455');

    const itemGender = component.addForm.controls.gender;
    itemGender.setValue('Male');

    const itemDob = component.addForm.controls.dob;
    itemDob.setValue('1998-03-05');

    const itemSupplier = component.addForm.controls.supplier;
    itemSupplier.setValue('AffZ');

    const itemSubscription = component.addForm.controls.subscription;
    itemSubscription.setValue('102455');

    const itemObs = component.addForm.controls.obs;
    itemObs.setValue('Male');

    const itemHistory = component.addForm.controls.history;
    itemHistory.setValue('fdgfd');

    expect(component.addForm.valid).toBeTruthy();
  });

  it('should not be valid when firstName more than 3 characters', () => {
    const  itemFirstName = component.addForm.controls.firstName;
    itemFirstName.setValue('Ffdsfsd');

    expect(itemFirstName.valid).toBeTruthy();
  });

  it('should not be valid when firstName have just 2 characters', () => {
    const  itemFirstName = component.addForm.controls.firstName;
    itemFirstName.setValue('Ff');

    expect(itemFirstName.valid).toBeFalsy();
  });

  it('should not be valid when lastName more than 3 characters', () => {
    const  item = component.addForm.controls.lastName;
    item.setValue('Ffdsfsd');

    expect(item.valid).toBeTruthy();
  });

  it('should not be valid when lastName have just 2 characters', () => {
    const  item = component.addForm.controls.lastName;
    item.setValue('Ff');

    expect(item.valid).toBeFalsy();
  });

  it('should be valid when cnp has 13 digits', () => {
    const  item = component.addForm.controls.cnp;
    item.setValue('1234567890123');

    expect(item.valid).toBeTruthy();
  });

  it('should not be valid when cnp doesn t have 13 digits', () => {
    const  item = component.addForm.controls.cnp;
    item.setValue('123');

    expect(item.valid).toBeFalsy();
  });

  it('should be valid when seria has 2 characters', () => {
    const  item = component.addForm.controls.seria;
    item.setValue('AZ');

    expect(item.valid).toBeTruthy();
  });

  it('should not be valid when seria doesn t have 2 characters', () => {
    const  item = component.addForm.controls.seria;
    item.setValue('dsfsd');

    expect(item.valid).toBeFalsy();
  });

  it('should be valid when seria number has 6 digits', () => {
    const  item = component.addForm.controls.number;
    item.setValue('123456');

    expect(item.valid).toBeTruthy();
  });

  it('should not be valid when number doesn t have 6 digits', () => {
    const  item = component.addForm.controls.number;
    item.setValue('1234567');

    expect(item.valid).toBeFalsy();
  });

  it('should not be valid when birthdate doesn t have date format', () => {
    const  item = component.addForm.controls.dob;
    item.setValue('1234567');

    expect(item.valid).toBeFalsy();
  });

  it('should not be valid when birthdate have date format but is not a valid date', () => {
    const  item = component.addForm.controls.dob;
    item.setValue('30/33/2021');

    expect(item.valid).toBeFalsy();
  });

  it('should  be valid when birthdate have date format and is a valid date', () => {
    const  item = component.addForm.controls.dob;
    item.setValue('1990-02-02');

    expect(item.valid).toBeTruthy();
  });

  it('should not be valid when supplier have more than 30 characters', () => {
    const  item = component.addForm.controls.supplier;
    item.setValue('abiashdosbfhudshfgiodhdvfdvfvfvfvrfcfdvfvfvfgoifd');

    expect(item.valid).toBeFalsy();
  });

  it('should be valid when supplier have more max 15 characters', () => {
    const  item = component.addForm.controls.supplier;
    item.setValue('aaaa');

    expect(item.valid).toBeTruthy();
  });

  it ('should contain 2 button tags', () => {
    const buttonEle = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonEle.length).toBe(2);
  });

  it ('should contain 10 input tags', () => {
    const buttonEle = fixture.debugElement.queryAll(By.css('input'));
    expect(buttonEle.length).toBe(10);
  });

  it ('should contain 1 form tag', () => {
    const buttonEle = fixture.debugElement.queryAll(By.css('form'));
    expect(buttonEle.length).toBe(1);
  });

  it('should call function addtransaction', fakeAsync(() => {
    spyOn(component, 'addtransaction');

    component.addtransaction(null);
    expect(component.addtransaction).toHaveBeenCalled();
  }));

  it('should call function addtransaction when click in Add button and the form is valid', fakeAsync(() => {
    const itemFirstName = component.addForm.controls.firstName;
    itemFirstName.setValue('ssss');

    const itemLastName = component.addForm.controls.lastName;
    itemLastName.setValue('Fdgregr');

    const itemCnp = component.addForm.controls.cnp;
    itemCnp.setValue('1234567890123');

    const itemSeria = component.addForm.controls.seria;
    itemSeria.setValue('AZ');

    const itemNumber = component.addForm.controls.number;
    itemNumber.setValue('102455');

    const itemGender = component.addForm.controls.gender;
    itemGender.setValue('Male');

    const itemDob = component.addForm.controls.dob;
    itemDob.setValue('1998-03-05');

    const itemSupplier = component.addForm.controls.supplier;
    itemSupplier.setValue('AfvfvZ');

    const itemSubscription = component.addForm.controls.subscription;
    itemSubscription.setValue('102455');

    const itemObs = component.addForm.controls.obs;
    itemObs.setValue('Male');

    const itemHistory = component.addForm.controls.history;
    itemHistory.setValue('fdgfd');

    spyOn(component, 'addtransaction');
    const button = fixture.debugElement.nativeElement.querySelector('#addButton');
    button.click();
    fixture.detectChanges();
    expect(component.addtransaction).toHaveBeenCalled();
  }));

  it ('should call function onReset()', () => {
    const button = fixture.debugElement.nativeElement.querySelector('#cancelButton');
    button.click();
    fixture.detectChanges();
    expect(component.submitted).toBe(false);

  });


});
