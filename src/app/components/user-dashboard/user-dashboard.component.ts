import { Component, OnInit } from '@angular/core';
import { BibleApiService } from 'src/app/services/bible-api.service';
import { take } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  votd;
  liturgyData;

  constructor(private bibleService: BibleApiService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.bibleService.getVerseToday()
    .pipe(
      take(1),
    ).subscribe(r=>{
      this.votd = r.verse.details 
    })  
    
    this.bibleService.getReadingsToday()
    .pipe(
      take(1),
    ).subscribe(r=>{
      this.liturgyData = r.data
   
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
