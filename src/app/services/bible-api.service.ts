import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BibleApiService {

  apiURL:string = environment.verseAPI;

  constructor(private http: HttpClient) { }

  getVerse() : Observable<any>{

      return this.http.get<any>(this.apiURL)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorHandler(err)
        })
      )
    
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error || "Internal Server Error");
  }

}
