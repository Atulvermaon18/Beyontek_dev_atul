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

}
