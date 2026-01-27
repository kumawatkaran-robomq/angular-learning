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
    const token = this.auth.getToken();
    return this.http.get<any>(`${this.api}/tasks`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }

  postTask(task_name: string, status: string) {
    const token = this.auth.getToken();
    return this.http.post(
      `${this.api}/tasks`,
      { task_name, status },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      },
    );
  }

  deleteTask(task_id:string){
    let token=this.auth.getToken();
    return this.http.delete(`${this.api}/tasks/${task_id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
  }
}
