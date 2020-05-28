import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('Positive Test: should contain 6 anchor tags', ()=> {
    const aEle = fixture.debugElement.queryAll(By.css('a'));
    expect(aEle.length==6).toBeTruthy();
  });

  it ('Positive Test: should be the second a tag', ()=> {
    const aEle = fixture.debugElement.queryAll(By.css('a'));
    if (aEle.length == 6)
    {
      const aEle2: HTMLAnchorElement = aEle[1].nativeElement;
      expect(aEle2.textContent).toBe('Home');
    }
  }); 
  it ('Positive Test: should be the third a tag', ()=> {
    const aEle = fixture.debugElement.queryAll(By.css('a'));
    if (aEle.length == 6)
    {
      const aEle3: HTMLAnchorElement = aEle[2].nativeElement;
      expect(aEle3.textContent).toBe('Add transaction');
    }
  }); 
  it ('Positive Test: should be the forth a tag', ()=> {
    const aEle = fixture.debugElement.queryAll(By.css('a'));
    if (aEle.length == 6)
    {
      const aEle4: HTMLAnchorElement = aEle[3].nativeElement;
      expect(aEle4.textContent).toBe('List all informations');
    }
  }); 
  it ('Positive Test: should be the fifth a tag', ()=> {
    const aEle = fixture.debugElement.queryAll(By.css('a'));
    if (aEle.length == 6)
    {
      const aEle1: HTMLAnchorElement = aEle[4].nativeElement;
      expect(aEle1.textContent).toBe('Login');
    }
  }); 
  it ('Positive Test: should be the sixth a tag', ()=> {
    const aEle = fixture.debugElement.queryAll(By.css('a'));
    if (aEle.length == 6)
    {
      const aEle1: HTMLAnchorElement = aEle[5].nativeElement;
      expect(aEle1.textContent).toBe('Logout');
    }
  });   
  it ('Positive Test: should contain a ul tag', ()=> {
    const ulEle = fixture.debugElement.queryAll(By.css('ul'));
    expect(ulEle.length).toBe(1);
  });
  it ('Positive Test: should contain 5 li tags', ()=> {
    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length==5).toBeTruthy();
  });
  it ('Negative Test: should not contain a button tag', ()=> {
    const buttonEle = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonEle.length).toBe(0);
  });
});