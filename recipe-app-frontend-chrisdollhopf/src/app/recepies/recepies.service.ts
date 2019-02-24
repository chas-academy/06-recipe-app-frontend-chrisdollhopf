import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' 

export interface IRecipe {
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecepiesService {
  private apiId = '7b45bed9';
  private appKey = '0f38b71cd97a7ac6b0b59e9e1d9005fc';

  // 'https://api.edamam.com/search?q=dessert&app_id=7b45bed9&app_key=0f38b71cd97a7ac6b0b59e9e1d9005fc&from=0&to=10'
  
  private url = `https://api.edamam.com/search?q=dessert&app_id=${this.apiId}&app_key=${this.appKey}&from=0&to=10`;

  // constructor that injects the HttpClient
  constructor(private http: HttpClient) {
  }

  // function that uses the http client from angular to
  // do an api call and get the recepies from the api
  getRecepies(recepie: string, from: number, to: number, callback = 'callback'): Observable<any> {
    return this.http.jsonp(`https://api.edamam.com/search?q=${recepie}&app_id=${this.apiId}&app_key=${this.appKey}&from=${from}&to=${to}`, callback).pipe(
      map(response => response)
    )
  }
}
