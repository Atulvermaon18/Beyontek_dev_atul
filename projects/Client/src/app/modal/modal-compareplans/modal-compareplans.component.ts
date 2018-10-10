import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-compareplans',
  templateUrl: './modal-compareplans.component.html',
  styleUrls: ['./modal-compareplans.component.css']
})
export class ModalCompareplansComponent implements OnInit {

  @Input() comparepolicyDetails: any;
  isPolicySelected = false;
  formgroup: FormGroup;
  comparePlans = [
    { value: 'classic', isSelected: false },
    { value: 'premier', isSelected: false },
    { value: 'executive', isSelected: false }
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<ModalCompareplansComponent>, private _formBuilder: FormBuilder) { }

  ngOnInit() { 
    this.formgroup = this._formBuilder.group({
      offroadcoverpremier: ['', Validators.required],
      hirecarclassic: ['', Validators.required],
      hirecarpremier: ['', Validators.required],
      personalaccidentcoverpassengers: ['', Validators.required],
      breakdownrecoveryclassicsilver: ['', Validators.required],
      breakdownrecoverypremiersilver: ['', Validators.required],
      breakdownrecoveryexecutivesilver: ['', Validators.required],
      breakdownrecoveryclassicgold: ['', Validators.required],
      breakdownrecoverypremiergold: ['', Validators.required],
      breakdownrecoveryexecutivegold: ['', Validators.required],
      breakdownrecoveryclassicplatinum: ['', Validators.required],
      breakdownrecoverypremierplatinum: ['', Validators.required],
      breakdownrecoveryexecutiveplatinum: ['', Validators.required]
    });
  }

  selectedPolicy(plan) {
    this.isPolicySelected = plan;
  }
}
