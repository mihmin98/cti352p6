import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { UpdateComponent } from './update.component';
import { Pacient } from 'src/app/classes/pacient';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, throwError, of } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction.service';


describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      imports: [ BrowserModule,
                 HttpClientModule,
                 AppRoutingModule,
                 RouterTestingModule,
                 FormsModule],
      providers: [
        {provide: transactionService, useClass: UpdateServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    component.pacient = new Pacient();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

class UpdateServiceStub{
  getPacientAfterId(id: number): Observable<any>{
    return of({ });
  }
}
class ActivatedRouteStub{
}
