import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Output() notifySelection: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() summary: any;
  constructor() { }

  ngOnInit() {
    console.log('Details quotes: ',this.summary)
  }

  notifyEvnt() {
    console.log('Sending Event');
    this.notifySelection.emit(true);
  }
}
