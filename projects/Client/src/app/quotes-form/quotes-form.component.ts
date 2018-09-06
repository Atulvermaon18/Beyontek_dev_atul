import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

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
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  quoteSelected = false;
  inputData={};

  constructor(private _formBuilder: FormBuilder, private service: ApiServiceService) {
    service.getInuts().then(() => {
      console.log(service.data);
      this.inputData=service.data;
    });
   }

  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      IdCtrl: ['', Validators.required],
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
      IdCtrl: ['', Validators.required],
      photoIdCtrl: ['', Validators.required],
      proofofincomeCtrl: ['', Validators.required],
      visacopyCtrl: ['', Validators.required],
      regcopyCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      IdCtrl: ['', Validators.required],
      photoIdCtrl: ['', Validators.required],
      proofofincomeCtrl: ['', Validators.required],
      visacopyCtrl: ['', Validators.required],
      regcopyCtrl: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      otpCtrl: ['', Validators.required]
    });

  }


  handleEvnt() {
    this.notify.emit('Click from Child component');

  }

  handleNotify(message: boolean): void {
    this.quoteSelected = true;
  }


}
