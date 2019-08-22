import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'
import { AccountService } from 'src/app/services/account.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hideMe: boolean = false;
  loggedAccount;

  @Output() toggleSidenav = new EventEmitter<void>();
  private returnUrl = '/'

  constructor(private router: Router, private accountService: AccountService) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        /*
                if(e.url === '/login'){
                  this.hideMe = true;
                }else{
                  this.hideMe = false;
                }
        */
        this.returnUrl = e.url;

      }
    })


    // Get logged in user
    this.loggedAccount = this.accountService.currentAccountValue;  


  }

  ngOnInit() {
  }

}
