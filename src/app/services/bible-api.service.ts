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

  getVerseToday() : Observable<any>{

     let todaysDate = new Date();
   
     let yearParameter = todaysDate.getFullYear()
     let dayParameter = '0' + todaysDate.getDate().toString().slice(-2)
     let monthParameter = '0' + (todaysDate.getMonth()+1).toString().slice(-2)
     let dateParameter = `${yearParameter}-${monthParameter}-${dayParameter}`    


      return this.http.get<any>(`${this.apiURL}/${dateParameter}`)
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
