import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {
// private apiUrl = 'https://radheapps.com/wp-json/wp/v2/users';
private apiUrl = 'https://radheapps.com/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
