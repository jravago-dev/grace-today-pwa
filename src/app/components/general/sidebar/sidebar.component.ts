import { Component, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  readonly VAPID_KEY = "";

  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private notif: PushNotificationService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }


  subscribeToNotifications() {
    /*
        this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_KEY
        })
          .then(sub => {
            this.notif.requestSubscription(sub).subscribe()
            this.openSnackBar(`Great, you've been added to subscriptions list.`, 'Dismiss');
          })
    
          */

    this.openSnackBar(`Great, you've been added to subscriptions list.`, 'Dismiss');
  }

}
