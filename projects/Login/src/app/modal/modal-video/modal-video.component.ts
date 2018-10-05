import { Component, OnInit, Input, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent implements OnInit {

  @Input() videoDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalVideoComponent>) { }

  ngOnInit() {
  }

  handleSelect(selected): void {
    this.dialogRef.close({'selected':selected});
  }

}
