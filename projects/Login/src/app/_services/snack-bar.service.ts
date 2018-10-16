import { Injectable } from '@angular/core';
import { SnackBarState } from './snackbar.model';
import { Subject } from 'rxjs';

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
