import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Url } from '../classes/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlSelect = new Url();
  url;

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string){
    this.url = this.urlSelect.getUrlLogin();

    return this.http.get(`${this.url}?email=${email}&password=${password}`, { responseType: 'text' })
                      .pipe(catchError(this.errorHandler));
  }

  registerUser(user: User){
    this.url = this.urlSelect.getUrlAddUser();

    return this.http.post<User>(`${this.url}`, user)
                    .pipe(catchError(this.errorHandler));
  }

  logoutUser(){
    this.url = this.urlSelect.getUrlLogout();

    return this.http.get(this.url, { responseType: 'text' })
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
