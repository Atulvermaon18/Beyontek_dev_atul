import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-compareplans',
  templateUrl: './modal-compareplans.component.html',
  styleUrls: ['./modal-compareplans.component.css']
})
export class ModalCompareplansComponent implements OnInit {

  @Input() comparepolicyDetails: any;
  isPolicySelected = false;
  comparePlans = [
    { value: 'classic', isSelected: false },
    { value: 'premier', isSelected: false },
    { value: 'executive', isSelected: false }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalCompareplansComponent>) { }

  ngOnInit() { }

  selectedPolicy(plan) {
    console.log('i am in modal componenet');
    console.log(plan);
    // for (let key of this.comparePlans) {
    //   if (key['value'] === plan) {
    //     this.comparePlans[plan].isSelected = true;
    //     console.log(this.comparePlans);
    //   }
    // }
    this.isPolicySelected = true;
  }
}
