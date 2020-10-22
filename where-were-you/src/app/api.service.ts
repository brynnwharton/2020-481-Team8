import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  redirectUrl: string;
  baseUrl:string = "http://localhost/where-were-you/API";
  //PHP_API_SERVER = "http://127.0.0.1:3306";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  // public userregistration(FirstName,LastName,Address, City, State, ZipCode, Email, Password) {
  // return this.httpClient.post<any>(this.baseUrl + '/write.php', { FirstName, LastName, Address, City, State, ZipCode, Email, Password })
  // .pipe(map(User => {
  // return User;
  // }));
  // }

  public getUser(){
    return this.httpClient.get('http://127.0.0.1:8000/user');
  }

  public insertUser(data){
    return this.httpClient.post('http://127.0.0.1:8000/user', data);
  }

  // createUser(user: User): Observable<User>{
  //   return this.httpClient.post<User>('http://localhost/where-were-you/API/write.php`, user);
  // }

}
