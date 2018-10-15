import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalPopupComponent } from 'projects/Login/src/app/modal/modal-popup/modal-popup.component';

@Component({
  selector: 'app-img-holder',
  templateUrl: './img-holder.component.html',
  styleUrls: ['./img-holder.component.css']
})
export class ImgHolderComponent implements OnInit {

  imgPath:String = '../../assets/img/rightside_icon.png';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showvideo() {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '600px',
      data: { head: 'video'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  showbuynewpolicy() {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '300px',
      data: { head: 'buynewpolicy'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
