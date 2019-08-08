import { Component, OnInit, Input } from '@angular/core';
import { BibleApiService } from 'src/app/services/bible-api.service';

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

  constructor(private bibleApiService: BibleApiService) { }

  ngOnInit() {
  }

}
