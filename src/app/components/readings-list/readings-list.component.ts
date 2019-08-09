import { Component, OnInit } from '@angular/core';
import { BibleApiService } from 'src/app/services/bible-api.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-readings-list',
  templateUrl: './readings-list.component.html',
  styleUrls: ['./readings-list.component.css']
})

export class ReadingsListComponent implements OnInit {

  liturgyData;
  liturgyReadings

  constructor(private bibleService: BibleApiService) {

    this.bibleService.getReadingsToday()
      .pipe(
        take(1)
      ).subscribe(r => {

        this.liturgyData = r.data
        this.liturgyReadings = r.data.readings

      })

  }

  ngOnInit() {
  }


  returnFormattedData(text) {
    let removedBrackets = text.replace(/\[/g, '(').replace(/]/g, ')').replace(/ *\([^)]*\) */g, "").replace(/\(|\)/g, '\n');
    return removedBrackets;
  }


}
