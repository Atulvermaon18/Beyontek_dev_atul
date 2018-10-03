import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalPopupComponent } from '../modal/modal-popup/modal-popup.component';
import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  @Input() message: string;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  isLinear = false;
  formgroup: FormGroup;
  isDriverInsured = false;
  quoteSelected = false;
  inputData = {};

  posts: any;
  loadingMessage: any;
  errorMessage: any;
  planLabel: any;

  constructor(private postsService: PostsService, public dialog: MatDialog,
    private _formBuilder: FormBuilder) {
      this.postsService.getInuts().subscribe((service: any) => {
        this.inputData = service.data;
      },
        (err: any) => {
          this.errorMessage = 'There are no posts pulled from the server!';
        });
  }


  ngOnInit() {

    this.formgroup = this._formBuilder.group({
      Id: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      profession: ['', Validators.required],
      reg: ['', Validators.required],
      uploadId: ['', Validators.required],
      chassis: ['', Validators.required],
      photoId: ['', Validators.required],
      proofofincome: ['', Validators.required],
      visacopy: ['', Validators.required],
      regcopy: ['', Validators.required],
      otp: ['', Validators.required],
      policy: ['', Validators.required],
      qno1: ['', Validators.required],
      qno2: ['', Validators.required],
      qno3: ['', Validators.required],
      vehicletype: ['', Validators.required],
      make: ['', Validators.required],
      Variant: ['', Validators.required],
      Year: ['', Validators.required],
      Vehiclecolor: ['', Validators.required],
      enginenumber: ['', Validators.required],
      vehiclevalue: ['', Validators.required],
      noofpassengers: ['', Validators.required],
      usage: ['', Validators.required],
      regat: ['', Validators.required],
      label: ['', Validators.required],
      repairtype: ['', Validators.required],
      model: ['', Validators.required],
      isDriverSameInsured: ['', Validators.required],
      dId: ['', Validators.required],
      dfname: ['', Validators.required],
      dlname: ['', Validators.required],
      ddob: ['', Validators.required],
      dgender: ['', Validators.required],
      dnationality: ['', Validators.required],
      demail: ['', Validators.required],
      dprofession: ['', Validators.required],
      hirecar: ['', Validators.required],
      personalaccidentcoverfordriver: ['', Validators.required],
      personalaccidentcoverforpassenger: ['', Validators.required],
      omancoverthirdparty: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:member-ordering
  summary: any = {};

  onSubmit(data) {

    // tslint:disable-next-line:prefer-const
    for (let key in data.value) {
      if (data.value.hasOwnProperty(key)) {
        console.log(key + ' -> ' + data.value[key]);
      }
    }
  }

  showDetails(data) {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '1034px',
      height: '448px',
      data: { head: 'buyplan', value: data }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.quoteSelected = true;
      this.summary = data.value;
    });
  }

  handleEvnt() {
    this.notify.emit('Click from Child component');
  }

  handleNotify(message: boolean): void {
    this.quoteSelected = false;
  }

  checkUncheckDriver() {
    if (this.isDriverInsured) {
      this.isDriverInsured = false;
    } else {
      this.isDriverInsured = true;
    }
  }

  displayPlanSummary(plan) {
   this.planLabel = plan;
  }

}
