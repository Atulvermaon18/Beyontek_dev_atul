import { Component, OnInit, Input, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-buynewpolicy',
  templateUrl: './modal-buynewpolicy.component.html',
  styleUrls: ['./modal-buynewpolicy.component.css']
})
export class ModalBuynewpolicyComponent implements OnInit {

  @Input() buynewpolicyDetails: any;

  buypolicy = [
    { policyName: 'Home Insurance', icon: 'assets/img/home_icon/Home_Insurance.png'},
    { policyName: 'Medical Insurance', icon: 'assets/img/home_icon/Medical_Insurance.png'},
    { policyName: 'Motor Insurance', icon: 'assets/img/home_icon/Motor_Insurance.png'},
    { policyName: 'Personal Accident Insurance', icon: 'assets/img/home_icon/Personal_Accident_Insurance.png'},
    { policyName: 'Travel Insurance', icon: 'assets/img/home_icon/Travel_Insurance.png'},
    { policyName: 'Tenant Compensation', icon: 'assets/img/home_icon/Tenant_Compensation.png'},
    { policyName: 'Income Protect', icon: 'assets/img/home_icon/Income_Protect.png'}
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalBuynewpolicyComponent>) { }

  ngOnInit() {
  }

  closePolicyPopup() {
    this.dialogRef.close();
  }

  handleSelect(selected): void {
    this.dialogRef.close({'selected':selected});
  }

}
