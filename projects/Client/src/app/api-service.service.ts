import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  data:any ={};
  APIEndpoint:String='';

  constructor(private http: HttpClient) {
     this.APIEndpoint = environment.APIEndpoint;
   }


  getInuts(): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const inputPath = this.APIEndpoint+"/5ba244d32f00007e008d2ce0";
      this.http.get<{}>(inputPath).subscribe(
        data => {
          this.data = data;
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
