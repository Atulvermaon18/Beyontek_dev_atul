import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-buynewpolicy',
  templateUrl: './modal-buynewpolicy.component.html',
  styleUrls: ['./modal-buynewpolicy.component.css']
})
export class ModalBuynewpolicyComponent implements OnInit {

  @Input() buynewpolicyDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalBuynewpolicyComponent>) { }

  ngOnInit() {
  }

  handleSelect(selected): void {
    this.dialogRef.close({ 'selected': selected });
  }

}
