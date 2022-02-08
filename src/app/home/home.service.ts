import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  checknode() {
    return this._http.post('http://0abe-2409-4072-6d01-f6e4-18e2-95d1-ce01-5e1c.ngrok.io/users',null);
  }

}
