import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 
  data: any = {};
  APIEndpoint: String = '';
  isLogged: boolean = true;

  constructor(private http: HttpClient) {
    this.APIEndpoint = environment.APIEndpoint;
  }


 getInuts() {
    return this.http.get(this.APIEndpoint + "/5bc0434f3200000e006a3120");
  }

  
  getLineOfBusiness() : Observable<any>{
    debugger
    let url = 'http://10.91.17.132:8090/lob/lobDetails?customerId=01';
    return this.http.get(url);
    // return this.http.post(url, params, {headers: this.headers})
  }

}
