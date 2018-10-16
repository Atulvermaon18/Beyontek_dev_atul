import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-get-quotes',
  templateUrl: './client-get-quotes.component.html',
  styleUrls: ['./client-get-quotes.component.css']
})
export class ClientGetQuotesComponent implements OnInit {

  @Output() notifySelection: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  notifyEvnt(event) {
    console.log('Sending Event');
    this.notifySelection.emit(true);
  }


}
