import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/users';
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  postUser(data: User): Observable<User> {
    console.log(data);
    return this.http.post<User>(this.url, data);
  }
}
