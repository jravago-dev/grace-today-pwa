import { Component, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { MatSnackBar } from '@angular/material';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loggedAccount;

  constructor(
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private notif: PushNotificationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private accountService: AccountService) {

    this.accountService.loggedAccount.subscribe(res => {
      this.loggedAccount = res
    })

  }

  ngOnInit() {

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/'])
  }

}
