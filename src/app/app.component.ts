import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grace : Today';
  offline: boolean;
  isInStandaloneMode: boolean;

  onNetworkStatusChange() {
    this.offline = !navigator.onLine;

    if (this.offline) {
      this.openSnackBar('You are now offline.', 'Dismiss')
    } else {
      this.openSnackBar('You are now online.', 'Dismiss')
    }

  }

  constructor(private _snackBar: MatSnackBar, private swUpdate: SwUpdate, private swPush: SwPush) {

    // Checking for updates.
    swUpdate.available.subscribe(event => {
      this.openSnackBar(`Hey, an update is available. We'll try to update it for you.`, '');
      swUpdate.activateUpdate().then(() =>
        this.openSnackBar(`Update complete. please refresh the page.`, ''))
    })
    // End

    /*
    swPush.messages.subscribe(n => {
      const notificationData: any = n;
      const options = {
        body: notificationData.message,
        badgeUrl: notificationData.badgeUrl,
        icon: notificationData.iconUrl
      };

      navigator.serviceWorker.getRegistration().then(r => {
        r.showNotification(notificationData.title, options)
          .then(result => {
            console.log(result)
          },
            err => {
              console.log(err)
            }
          )
      })

    })
    */

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  isStandalone() {
    this.isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
    return !!this.isInStandaloneMode || window.matchMedia('(display-mode: standalone)').matches;
  }

  exitsOnBack() {
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
    return this.isStandalone(); //&& browserInfo.os.name === 'Android';
  }

  handleBackEvents() {
    window.history.pushState({}, '');

    window.addEventListener('popstate', () => {
      //TODO: Optionally show a "Press back again to exit" tooltip
      setTimeout(() => {
        window.history.pushState({}, '');
        //TODO: Optionally hide tooltip        
      }, 2000);
    });
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    window.addEventListener('online', this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));

    if (this.exitsOnBack()) this.handleBackEvents();
  }


}
