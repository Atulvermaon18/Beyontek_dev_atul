import { Component, OnInit, Input, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent implements OnInit {

  @Input() cardDetails: any;

  popImage: string;
  popTitle: string;
  splitPopImage: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalCardComponent>) { }

  ngOnInit() {
    this.popTitle = this.cardDetails.title;
    this.splitPopImage = this.cardDetails.img.split('.');
    this.splitPopImage = '../..'+this.splitPopImage[4]+2+'.png';
    this.popImage = this.splitPopImage;
  }

  handleSelect(selected): void {
    this.dialogRef.close({'selected':selected});
  }

}
