import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail-preview',
  templateUrl: './user-detail-preview.component.html',
  styleUrls: ['./user-detail-preview.component.css']
})
export class UserDetailPreviewComponent implements OnInit {

  @Input() userDetailPreview : any;
  constructor() { }

  ngOnInit() {
  }

}
