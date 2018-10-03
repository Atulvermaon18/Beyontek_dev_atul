import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalPopupComponent } from 'projects/Client/src/app/modal/modal-popup/modal-popup.component';

@Component({
  selector: 'app-client-claim-intimation',
  templateUrl: './client-claim-intimation.component.html',
  styleUrls: ['./client-claim-intimation.component.css']
})
export class ClientClaimIntimationComponent implements OnInit {

  constructor(public dialog: MatDialog){}

  ngOnInit() {
  }

  showvideo() {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '300px',
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
