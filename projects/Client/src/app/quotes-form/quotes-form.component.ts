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
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  quoteSelected = false;
  inputData={
    step1:{
      title:'Personal Details',
      inputs:[
        {
          label:'Id',
          type:'text'
        },
        {
          label:'name',
          type:'text'
        },
        {
          label:'age',
          type:'number'
        },
        {
          label:'gender',
          type:'text'
        },
        {
          label:'nationality',
          type:'text'
        },
        {
          label:'mobile',
          type:'number'
        }
      ]
    },
    step2:{
      title:'Vehicle Details',
      inputs:[
        {
          label:'reg',
          type:'text'
        },
        {
          label:'chassis',
          type:'text'
        }
      ]
    },
    step3:{
      title:'Upload Details',
      inputs:[
        {
          label:'Id',
          type:'text'
        },
        {
          label:'photoId',
          type:'text'
        },
        {
          label:'proofofincome',
          type:'number'
        },
        {
          label:'visacopy',
          type:'text'
        },
        {
          label:'regcopy',
          type:'text'
        }
      ]
    },
    step4:{
      title:'Few Questions?',
      inputs:[
        {
          label:'qno1',
          type:'text',
          content:"How far is your office from home?"
        },
        {
          content:'What is the average driving in a day?',
          type:'text',
          label:"qno2"
        },
        {
          label:"qno3",
          content:'How long you have been driving in UAE?',
          type:'number'
        }
      ]
    },
    step5:{
      title:'Verify OTP',
      context:"One time password has been sent to ********98. Please enter the same here to view your quotes",
      inputs:[
        {
          label:'otp',
          type:'text',
          content:"Enter your OTP"         
        }        
      ]
    },
  }

  constructor(private _formBuilder: FormBuilder) { }

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
