import { Component, OnInit, Input } from '@angular/core';
import { BibleApiService } from 'src/app/services/bible-api.service';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-reading-card',
  templateUrl: './reading-card.component.html',
  styleUrls: ['./reading-card.component.css']
})
export class ReadingCardComponent implements OnInit {

  @Input() readingType: string;
  @Input() readingTypeNum: number;
  @Input() readingTitle: string;
  @Input() readingSubtitle: string;
  @Input() readingBody: string;
  @Input() readingImage: string;
  dateToday;

  constructor(private bibleApiService: BibleApiService, private _snackBar: MatSnackBar) {

    this.dateToday = new Date(Date.now()).toLocaleString();
  }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
