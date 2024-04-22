import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin:boolean=false;
  constructor(private http:HttpClient) {

  }
  private apiUrl = 'http://localhost:8080/user_data';
 
  insertData(data: any): Observable<any> {
    console.log(data);
    return this.http.post<any>(this.apiUrl, data);
  }
  updateData() {
  }
  getData(data: any) {
    const username = data.value.username;
    const pass = data.value.pass;
    console.log(username,pass)
    this.isLoggedin=true;
    return this.http.get<any>(`${this.apiUrl}?username=${username}&pass=${pass}`);
  }
  getDataByUsername(data: any) {
    return this.http.get<any>(`${this.apiUrl}?username=${data}`);
  }
  deleteData() {
  }
}
