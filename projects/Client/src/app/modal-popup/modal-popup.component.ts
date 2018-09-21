import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {
  
  popImage: string;
  popTitle: string;
  splitPopImage: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalPopupComponent>) { }

  ngOnInit() {
    this.popTitle = this.data.title;
    this.splitPopImage = this.data.img.split('.');
    this.splitPopImage = '../..'+this.splitPopImage[4]+2+'.png';
    this.popImage = this.splitPopImage;
  }

  handleSelect(selected): void {
    this.dialogRef.close({'selected':selected});
  }

}
