import { Component, OnInit } from '@angular/core';
import { BibleApiService } from 'src/app/services/bible-api.service';
import { take } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userDetails;

  constructor(private bibleService: BibleApiService, private _snackBar: MatSnackBar, private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.loggedAccount.subscribe(res=>{
      this.userDetails = res;      
    })      

  }

  returnQuoted(text){
    return `"${text}"`;
  } 

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
