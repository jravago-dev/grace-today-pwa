import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

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

  constructor(private _snackBar: MatSnackBar, private swUpdate: SwUpdate) {

    swUpdate.available.subscribe(event => {
      console.log('New update available');
      swUpdate.activateUpdate().then(() => document.location.reload())
    })
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

      this.openSnackBar('You are now offline.', 'Dismiss')

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
