import { Injectable } from '@angular/core';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServiceService { 

  // subject = new Rx.BehaviorSubject<any>("");

  isLogged: boolean = false;
  constructor() {
    
  }

  // getValues(q){
  //   this.subject.next(q);
  // }
}
