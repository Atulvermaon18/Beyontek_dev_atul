import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  isLogged: boolean = false;
  loginURL: 'http://10.91.16.60:9090/login';

  constructor(private http: HttpClient) {
    
  }

  getLogin() {
    return this.http.get(this.loginURL);
  }
}
