import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  notifURL: string = `http://localhost:3000/subscribe`;


  constructor(private http: HttpClient) { }


  requestSubscription(sub: PushSubscription){
    return this.http.post(this.notifURL, sub).pipe()
  }

}
