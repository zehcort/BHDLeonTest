import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public http: HttpClient) {}

  get(urlService: string, token: string) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    };
    return this.http.get(urlService, { headers });
  }

  post(urlService: string, body: any, headers?: {}) {
    return this.http.post(urlService, body, headers);
  }
}
