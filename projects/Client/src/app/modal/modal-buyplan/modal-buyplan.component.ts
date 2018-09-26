import { Component, OnInit, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-buyplan',
  templateUrl: './modal-buyplan.component.html',
  styleUrls: ['./modal-buyplan.component.css']
})
export class ModalBuyplanComponent implements OnInit {

  @Input() buyplanDetails: any;  

  constructor(private dialogRef: MatDialogRef<ModalBuyplanComponent>) { }

  ngOnInit() {
  }

  skipContinue() {
    this.dialogRef.close({'selected':'sendsomedata'});
  }

  handleSelect(selected): void {
    this.dialogRef.close({'selected':selected});
  }

}
