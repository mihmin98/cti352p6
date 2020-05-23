import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, throwError, of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ BrowserModule,
                 HttpClientModule,
                 AppRoutingModule,
                 RouterTestingModule,
                 FormsModule],
      providers: [
        {provide: UserService, useClass: LoginServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.user = new User();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one Login button', () => {
    const buttonEl = fixture.debugElement.query(By.css('button'));
    expect(buttonEl.nativeElement.textContent).toEqual('Login');
  });

  it('should have one Register link', () => {
    const buttonEl = fixture.debugElement.query(By.css('a'));
    expect(buttonEl.nativeElement.textContent).toEqual('Register');
  });

  it('should get user on click event', () => {

    const buttonEl: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    spyOn(component, 'loginUser');
    if (buttonEl.textContent === 'Login'){
      buttonEl.click();
    }
    expect(component.loginUser).toHaveBeenCalledTimes(1);
  });

});

class LoginServiceStub{
  getUser(email: string, password: string): Observable<any>{
    return of({ });
  }
}
class ActivatedRouteStub{
}
