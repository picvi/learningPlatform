import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxrjs';

@Injectable({
  providedIn: 'root'
})
export class BgGetTensesService {
  constructor(private http: HttpClient) {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  getPastSimple(): Observable<Object> {
    return this.http.get('http://localhost:3000/pastSimple', {
      responseType: 'json'
    });
  }
}
