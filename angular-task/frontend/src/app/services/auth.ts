import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}
  api = environment.API_URL;
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));

  token = this.tokenSubject.asObservable();

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  getToken() {
    return this.tokenSubject.getValue();
  }
  clearToken() {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.api}/login`, { email, password });
  }

  signup(name: string, email: string, password: string) {
    return this.http.post<any>(`${this.api}/signup`, { name, email, password });
  }
  getUser() {
    let t = null;
    this.token.subscribe((token) => (t = token));
    return this.http.get<any>(this.api + '/user', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${t}`),
    });
  }
}
