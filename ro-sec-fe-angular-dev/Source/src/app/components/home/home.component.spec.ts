import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Positive Test: should create', () => {
    expect(component).toBeTruthy();
  });


  it ('Positive Test: should contain first p tag', ()=> {
    const pEle = fixture.debugElement.queryAll(By.css('p'));
    if (pEle.length == 2)
    {
      const pEle1: HTMLParagraphElement = pEle[0].nativeElement;
      expect(pEle1.textContent).toBe('Welcome to the Demo! This is a demo project used for:');
    }
  });
  it ('Positive Test: should contain second p tag', ()=> {
    const pEle = fixture.debugElement.queryAll(By.css('p'));
    if (pEle.length == 2)
    {
      const pEle1: HTMLParagraphElement = pEle[1].nativeElement;
      expect(pEle1.textContent).toBe('The front-end is written in Angular. The back-end has services to add, delete, view and to update elements (name and description) stored in database.');
    }
  });  


  it ('Positive Test: should contain first li tag', ()=> {
    const liEle = fixture.debugElement.queryAll(By.css('li'));
    if (liEle.length == 3)
    {
      const liEle1: HTMLLIElement = liEle[0].nativeElement;
      expect(liEle1.textContent).toBe('to learn different technologies,');
    }
  });
  it ('Positive Test: should contain second li tag', ()=> {
    const liEle = fixture.debugElement.queryAll(By.css('li'));
    if (liEle.length == 3)
    {
      const liEle2: HTMLLIElement = liEle[1].nativeElement;
      expect(liEle2.textContent).toBe('for testing different technologies,');
    }
  });
  it ('Positive Test: should contain third li tag', ()=> {
    const liEle = fixture.debugElement.queryAll(By.css('li'));
    if (liEle.length == 3)
    {
      const liEle3: HTMLLIElement = liEle[2].nativeElement;
      expect(liEle3.textContent).toBe('to show progress.');
    }
  });
  it ('Negative Test: should not contain a button tag', ()=> {
    const buttonEle = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonEle.length).toBe(0);
  });
});

