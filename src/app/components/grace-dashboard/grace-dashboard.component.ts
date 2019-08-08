import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grace-dashboard',
  templateUrl: './grace-dashboard.component.html',
  styleUrls: ['./grace-dashboard.component.css']
})
export class GraceDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatText(text){

    let removedBrackets = text.replace(/\[/g, '(').replace(/]/g, ')').replace(/ *\([^)]*\) */g, "").replace(/\(|\)/g, '<br/><br/>');   

    return removedBrackets;
  }

}
