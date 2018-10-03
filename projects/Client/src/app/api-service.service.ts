import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  data: any = {};
  APIEndpoint: String = '';

  constructor(private http: HttpClient) {
    this.APIEndpoint = environment.APIEndpoint;
  }


  getInuts(): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const inputPath = this.APIEndpoint + "/5bae1f602e00005f00bb4121";
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
