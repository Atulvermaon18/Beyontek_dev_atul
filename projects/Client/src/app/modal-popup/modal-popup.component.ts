import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  @Output() notifySelection: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  popImage: string;
  popTitle: string;
  splitPopImage: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.popTitle = this.data.title;
    this.splitPopImage = this.data.img.split('.');
    this.splitPopImage = '../..'+this.splitPopImage[4]+2+'.png';
    this.popImage = this.splitPopImage;
  }

  notifyEvnt() {
    console.log('Sending Event');
    this.notifySelection.emit(true);
  }

}
