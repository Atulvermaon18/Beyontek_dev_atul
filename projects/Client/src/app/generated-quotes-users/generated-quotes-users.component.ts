import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generated-quotes-users',
  templateUrl: './generated-quotes-users.component.html',
  styleUrls: ['./generated-quotes-users.component.css']
})
export class GeneratedQuotesUsersComponent implements OnInit {

   @Input() hideGeneratedQuotes: boolean;
   
  constructor() { }

  ngOnInit() {
  }

}
