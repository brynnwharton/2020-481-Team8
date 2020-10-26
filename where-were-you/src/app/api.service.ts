import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { User } from 'login/user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  redirectUrl: string;
  constructor(private httpClient: HttpClient) { }

  // public userregistration(FirstName,LastName,Address, City, State, ZipCode, Email, Password) {
  // return this.httpClient.post<any>(this.baseUrl + '/write.php', { FirstName, LastName, Address, City, State, ZipCode, Email, Password })
  // .pipe(map(User => {
  // return User;
  // }));
  // }

  public loginUser(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/login', data);
  }

  public insertUser(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/register', data);
  }

}