import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'
import { ConsoleLoggerService } from 'src/app/services/utils/console-logger.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  private returnUrl = '/'

  constructor(private router:Router) {
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
        this.returnUrl = e.url;
       
      }
    })
   }

  ngOnInit() {
  }

}
