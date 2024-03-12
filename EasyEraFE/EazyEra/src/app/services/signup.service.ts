import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseURL: string = "https://localhost:7040/api/";
  // baseURL: string = "https://api.github.com/";
  userURL: string = "Users/";


  constructor(private http: HttpClient) { }

  createUser(request: UserDetails): Observable<any> {
    //Need to add Api Url to call create Users API
    const url = 'https://localhost:7040/weatherforecast';
    return this.http.get(url)
  }

  getUser(request: UserDetails): Observable<any> {
    const url = this.baseURL + 'weatherforecast';
    return this.http.get(url)
  }
  validateEmailExists(userEmail: string): Observable<any> {
    const url = this.baseURL + this.userURL + 'ValidateEmailExists?Email=' + userEmail;
    return this.http.get(url)
  }
  validatePhoenNumberExists(userPhoneNo: number): Observable<any> {
    const url = this.baseURL + this.userURL + 'ValidatePhoneNumber?phoneNumber=' + userPhoneNo;
    return this.http.get(url)
  }

  AuthoriseUserLogin(userPhoneNo: string): Observable<any> {
    const url = this.baseURL + this.userURL + 'AuthinticateUser?phoneNumber=' + userPhoneNo;
    return this.http.get(url)
  }
  authorizeUserLogin(phoneNumber: string): Observable<any> {
    const url = this.baseURL + this.userURL + 'AuthinticateUser?phoneNumber=' + phoneNumber;
    return this.http.get(url)
  }
  register(data: UserDetails): Observable<any> {
    const url = this.baseURL + this.userURL + 'AuthinticateUser';
    return this.http.post<any>( url, data);
  }

}
