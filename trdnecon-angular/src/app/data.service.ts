import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators'
import { Observable, throwError} from 'rxjs';

//import articles from 'tradingeconomics';

//const endpoint = 'https://brains.tradingeconomics.com/v2/search/wb,fred,comtrade?q=nigeria&pp=50&p=0&_=1557934352427&stance=2'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  te = require('tradingeconomics')

  // getData(): Observable<any[]> {

   // return this.http.get<any>(endpoint).pipe(tap(data => console.log('All', JSON.stringify(data))),catchError(this.handleError));
  //}

    login:any = this.te.login('ecf64cd3af52455:f2l3yd40jeylv42');
    //data = this.login.getIndicatorData(['china', 'portugal']).then(function(data) {
    //console.log(data)

    //});

  
      data = this.login.getArticles().then(function(data: any) {
        console.log(data)
      })

      getData(): Observable<any[]> {

         return this.http.get<any>(this.data).pipe(tap(data => console.log('All', JSON.stringify(data))),catchError(this.handleError));
       }

  private handleError(err:HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`
    } else {
      errorMessage = `Server returnedcode: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
