import { Component, OnInit } from '@angular/core';
import { BibleApiService } from 'src/app/services/bible-api.service';
import { take } from 'rxjs/operators'
@Component({
  selector: 'app-grace-dashboard',
  templateUrl: './grace-dashboard.component.html',
  styleUrls: ['./grace-dashboard.component.css'],
  animations:[
    
  ]
})
export class GraceDashboardComponent implements OnInit {

  votd;

  constructor(private bibleService: BibleApiService) { }

  ngOnInit() {
    this.bibleService.getVerseToday()
    .pipe(
      take(1),
    ).subscribe(r=>{
      this.votd = r.verse.details
      
    })
  }

returnQuoted(text){
  return `"${text}"`;
}

}
