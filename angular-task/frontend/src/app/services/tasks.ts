import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(
    private http: HttpClient,
    private auth: Auth,
  ) {}
  api = environment.API_URL;

  getTasks() {
    let token = null;
    this.auth.token.subscribe((t) => (token = t));
    return this.http.get<any>(`${this.api}/tasks`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    });
  }
}
