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
  formgroup: FormGroup;

  quoteSelected = false;
  inputData={};

  constructor(private _formBuilder: FormBuilder, private service: ApiServiceService) {
    service.getInuts().then(() => {
      console.log(service.data.data);
      this.inputData=service.data.data;
    });
   }

  ngOnInit() {

    this.formgroup = this._formBuilder.group({
      Id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      mobile: ['', Validators.required],
      reg: ['', Validators.required],
      uploadId:['', Validators.required],
      chassis: ['', Validators.required],
      photoId: ['', Validators.required],
      proofofincome: ['', Validators.required],
      visacopy: ['', Validators.required],
      regcopy: ['', Validators.required],
      otp: ['', Validators.required],
      policy: ['', Validators.required],
      qno1: ['', Validators.required],
      qno2: ['', Validators.required],
      qno3: ['', Validators.required]
    });
  }

  onSubmit(data){
    
    for (var key in data.value) {
      if (data.value.hasOwnProperty(key)) {
          console.log(key + " -> " + data.value[key]);
      }
  }
  }

  handleEvnt() {
    this.notify.emit('Click from Child component');

  }

  handleNotify(message: boolean): void {
    this.quoteSelected = true;
  }


}
