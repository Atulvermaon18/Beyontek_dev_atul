import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  @Input() message: string;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();



  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  quoteSelected = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      idCtrl: ['', Validators.required],
      nameCtrl: ['', Validators.required],
      ageCtrl: ['', Validators.required],
      genderCtrl: ['', Validators.required],
      nationalityCtrl: ['', Validators.required],
      mobileCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      regCtrl: ['', Validators.required],
      chassisCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      idCtrl: ['', Validators.required],
      photoidCtrl: ['', Validators.required],
      incomeproofCtrl: ['', Validators.required],
      visaCtrl: ['', Validators.required],
      regCtrl: ['', Validators.required],
    });

  }


  handleEvnt() {
    this.notify.emit('Click from Child component');

  }

  handleNotify(message: boolean): void {
    this.quoteSelected = true;
  }


}
