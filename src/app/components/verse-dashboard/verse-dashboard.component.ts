import { Component, OnInit } from '@angular/core';
import { BibleApiService } from 'src/app/services/bible-api.service';

@Component({
  selector: 'app-verse-dashboard',
  templateUrl: './verse-dashboard.component.html',
  styleUrls: ['./verse-dashboard.component.css']
})
export class VerseDashboardComponent implements OnInit {

  verseObject: any;
  verseText: string;

  constructor(private bibleService: BibleApiService) {

    if(!this.verseObject) { this.verseObject = []; }

    bibleService.getVerse().subscribe(r => {
      if (r){
        console.log(r.data)
        this.verseObject = r.data
        this.verseText = this.formatText(r.data.readings[2].text)
            
      }
    })
  }

  ngOnInit() {
  }

  formatText(text){

    let removedBrackets = text.replace(/\[/g, '(').replace(/]/g, ')').replace(/ *\([^)]*\) */g, "").replace(/\(|\)/g, '<br/><br/>');   

    return removedBrackets;
  }

}
