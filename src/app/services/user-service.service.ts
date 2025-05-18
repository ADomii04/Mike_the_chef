import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
  password: string; 
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/api/users', user);
  }
  getUserById(id: string): Observable<User> {
  return this.http.get<User>(`http://localhost:3000/api/users/${id}`);
  }
  updateUser(userId: string, userData: Partial<User>): Observable<any> {
  return this.http.put(`${this.baseUrl}/${userId}`, userData);
  }
  deleteUser(userId: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${userId}`);
  }



}