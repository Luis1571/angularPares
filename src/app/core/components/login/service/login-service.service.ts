import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
 
  constructor(private http: HttpClient) { }

  create(urlServicio: string,nick:string) : Observable<string> {
    return this.http.post<any>(urlServicio, nick)
  }
  public findById(urlServicio : string) : Observable<any> {
    return this.http.get<any>(urlServicio);
  }
}
