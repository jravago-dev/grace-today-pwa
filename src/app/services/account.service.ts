import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Account } from '../models/Account';
import { environment } from 'src/environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiURL: string = environment.gtAPI;
  private accountSubject: BehaviorSubject<Account>
  public loggedAccount: Observable<Account>

  constructor(private http: HttpClient) {
    this.accountSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('user-account')))
    this.loggedAccount = this.accountSubject.asObservable()
  }

  public get currentAccountValue(): Account {
    return this.accountSubject.value;
  }

  register(account: Account) {
    return this.http.post<any>(`${this.apiURL}/accounts/register`, account , httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorHandler(err)
        })
      )
  }

  activate(activationCode) {

    return this.http.get<any>(`${this.apiURL}/activate/${activationCode}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorHandler(err)
        })
      )

  }


  login(userName: string, passwordHash: string) {

    return this.http.post<any>(`${this.apiURL}/login`, { userName, passwordHash }, httpOptions)
      .pipe(
        map(account => {
          localStorage.setItem('user-account', JSON.stringify(account))
          this.accountSubject.next(account)
          return account
        })
      )
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user-account');
    this.accountSubject.next(null);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error || "Internal Server Error");
  }


}
