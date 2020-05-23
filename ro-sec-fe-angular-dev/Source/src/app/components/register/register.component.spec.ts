import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { RegisterComponent } from './register.component';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, throwError, of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ BrowserModule,
                 HttpClientModule,
                 AppRoutingModule,
                 RouterTestingModule,
                 FormsModule],
      providers: [
        {provide: UserService, useClass: RegisterServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.user = new User();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one Register button', () => {
    const buttonEl = fixture.debugElement.query(By.css('button'));
    expect(buttonEl.nativeElement.textContent).toEqual('Register');
  });

  it('should have one Login link', () => {
    const buttonEl = fixture.debugElement.query(By.css('a'));
    expect(buttonEl.nativeElement.textContent).toEqual('Login');
  });

  it('should add user on click event', () => {

    const buttonEl: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    spyOn(component, 'registerUser');
    if (buttonEl.textContent === 'Register'){
      buttonEl.click();
    }
    expect(component.registerUser).toHaveBeenCalledTimes(1);
  });
});

class RegisterServiceStub{
  getUserByEmail(email: string): Observable<any>{
    return of({ });
  }
}
class ActivatedRouteStub{
}
