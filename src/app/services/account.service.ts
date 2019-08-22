import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Account } from '../models/Account';
import { environment } from 'src/environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';

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


}
