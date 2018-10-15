import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackBarState } from './snackbar.model';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {


  private snackBarSubject = new Subject<SnackBarState>();

  snackBarState = this.snackBarSubject.asObservable();

  constructor() { }

  show(msg, status) {
    this.snackBarSubject.next(<SnackBarState>{ title: msg, status:status });
  }

}
