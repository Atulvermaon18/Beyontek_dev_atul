import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 
  data: any = {};
  APIEndpoint: String = '';

  constructor(private http: HttpClient) {
    this.APIEndpoint = environment.APIEndpoint;
  }


 getInuts() {
    return this.http.get(this.APIEndpoint + "/5bac958631000053006547e6");
  }

}