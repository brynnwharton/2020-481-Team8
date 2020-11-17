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

  public resetUser(data){
   return this.httpClient.post('http://127.0.0.1:8000/api/reset', data);
  }

  public postActivity(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/postActivity', data);
  }

  public getActivity(data){
    return this.httpClient.get('http://127.0.0.1:8000/api/getActivity', data);
  }

  public getRecentActivity(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getActivity');
  }

  public getCovidData(): Observable<Object>{
    return this.httpClient.get('https://api.covidtracking.com/v1/states/current.json');
  }

}
