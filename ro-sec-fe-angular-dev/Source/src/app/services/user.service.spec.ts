import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse} from '@angular/common/http';
import { Url } from '../classes/url';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let url: string;
  let urlSelect;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: []
    });
    service = TestBed.inject(UserService);
    httpMock = getTestBed().inject(HttpTestingController);
    urlSelect = new Url();
    urlSelect.urlFakeJsonFile = 'http://localhost:3500/';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a user', () => {
    url = urlSelect.getUrlAddUser();
    const userDummy = {id: 2,
                          firstName: 'viorel',
                          lastName: 'voichita',
                          email: 'viorel@wipro.com',
                          password: 'TZ123456',
                          number: '123456'};

    service.registerUser(userDummy).subscribe(retriveInfo => {
      expect(retriveInfo).toEqual(userDummy);
      });

    const request = httpMock.expectOne({url});
    expect(request.request.method).toBe('POST');
    request.flush(userDummy);
    });


  it('should throws 404 error', () => {
    url = urlSelect.getUrlLogout();

    service.logoutUser().subscribe(
        data => fail('Should have failed with 404 error'),
        (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('404 error');
        }
    );
    const request = httpMock.expectOne({url});
    expect(request.request.method).toBe('GET');

    request.flush('404 error', { status: 404, statusText: 'Not Found' });
    });

  it('should logout', () => {
    url = urlSelect.getUrlLogout();

    service.logoutUser().subscribe(message => {
        expect(message).toEqual('Logout was successful.');
        });
    const request = httpMock.expectOne({url});
    expect(request.request.method).toBe('GET');

    request.flush('Logout was successful.');
    });

  it('should login', () => {
    url = urlSelect.getUrlLogin();
    const email = 'test@wipro.com';
    const password = '123456';
    service.loginUser(email, password).subscribe(message => {
        expect(message).toEqual('Login was successful.');
        });
    const request = httpMock.expectOne(`${url}?email=${email}&password=${password}`);
    expect(request.request.method).toBe('GET');

    request.flush('Login was successful.');
    });

  it('should generate correct url back end', () => {
    urlSelect.urlBackendUser = 'http://backendhost:1000/';
    urlSelect.selectUrl = 1;

    let urlGenerate = urlSelect.getUrlAddUser();
    expect(urlGenerate).toEqual('http://backendhost:1000/user/add');

    urlGenerate = urlSelect.getUrlLogin();
    expect(urlGenerate).toEqual('http://backendhost:1000/user/login');

    urlGenerate = urlSelect.getUrlLogout();
    expect(urlGenerate).toEqual('http://backendhost:1000/user/logout');
  });
});
