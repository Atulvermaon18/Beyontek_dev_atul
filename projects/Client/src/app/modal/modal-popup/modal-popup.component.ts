
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  header: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalPopupComponent>) { }

  ngOnInit() {
    this.header = this.data.head;
  }

  handleSelect(selected): void {
    this.dialogRef.close({ 'selected': selected });
  }

}
