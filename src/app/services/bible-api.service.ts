import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class BibleApiService {

  apiURL: string = environment.verseAPI;
  votdURL: string = environment.votdAPI;
  bibleURL: string = environment.bibleAPI;

  constructor(private http: HttpClient) { }


  getVerseToday(): Observable<any> {
    return this.http.get<any>(`${this.votdURL}`, httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorHandler(err)
        })
      )
  }

  getReadingsToday(): Observable<any> {

    let todaysDate = new Date();
    let dateParameter = this.formatDate(todaysDate)

    return this.http.get<any>(`${this.apiURL}/${dateParameter}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorHandler(err)
        })
      )

  }

  getSpecificVerse(verse) {

    return this.http.get<any>(`${this.bibleURL}/${verse}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorHandler(err)
        })
      )

  }

  getRandomPlaceholderImage(readingType) {
    /*
    return this.http.get(this.imageURL + '/photos?client_id=' + environment.unsplashAppID + '&query="' + readingType + '"&count=1')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorHandler(err)
        })
      )
    */
  }

   formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


  errorHandler(error: HttpErrorResponse) {
    return throwError(error || "Internal Server Error");
  }

}
