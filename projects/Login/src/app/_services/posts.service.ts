import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 
  data: any = {};
  APIEndpoint: String = '';
  DEVAPIEndpoint: any = '';
  isLogged: boolean = false;
  
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) {
    this.APIEndpoint = environment.APIEndpoint;
    this.DEVAPIEndpoint = environment.DevEndpoint;
  }


 getInuts() {
    return this.http.get(this.APIEndpoint + "/5bbb33003100006400148ec4");
  }

  postInputs(serviceAPI,params) : Observable<any>{
    debugger
    let url = this.DEVAPIEndpoint+serviceAPI
    return this.http.post(url, params, {headers: this.headers})
  }

}
