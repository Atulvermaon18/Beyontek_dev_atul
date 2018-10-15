import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output() onNameChanged = new EventEmitter();
  loginForm: FormGroup;
  signupForm: FormGroup;
  sendotpboolean:boolean=true;
  favoritemailorno: string;
  seasons: string[] = ['Mobile', 'Email'];

  constructor(private router: Router, public postService: PostsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', Validators.required],
      otp: ['', Validators.required],
      radiobtn: ['', Validators.required],
    });
  }

  onLogin() {
    debugger;
    localStorage.setItem("logged", "Atul");


    if (this.loginForm.invalid) {
      return;
    }
    let params = {
      "email": this.loginForm.value.username,
      "password": this.loginForm.value.password
    }
    this.postService.postInputs('login', params).subscribe(result => {
      console.log(result);
    },err => {
      alert("Network Error");
    });


    // this.service.subject.next('policy');
    // this.router.navigate(['/policy']);
    // if(localStorage.getItem('logged') !== null){
    //   this.postService.isLogged = true;
    //   this.router.navigate(['/policy']);
    //   console.log('Test');      
    // }else{
    //   // alert("Please login!");
    //   this.postService.isLogged = false;
    //   this.router.navigate(['/login']);
    // }      
  }

  sendOTP() {
    debugger;
    if (this.signupForm.value.radiobtn=="") {
      return;
    }
    this.sendotpboolean=false;
    let params = {
      "email": this.signupForm.value.radiobtn  
    }
    this.postService.postInputs('signup/sendEmailOTP', params).subscribe(result => {
      console.log(result);
    },err => {
      alert("Network Error");
    });
  }

  onSignup() {
    debugger;
    if (this.signupForm.invalid) {
      return;
    }
    let params = {
      "firstName": this.signupForm.value.firstname,
      "lastName": this.signupForm.value.lastname,
      "mobile": this.signupForm.value.mobileno,
      "email": this.signupForm.value.email,
      "otp": this.signupForm.value.otp,
      "otpSentTo": this.signupForm.value.email
    }
    this.postService.postInputs('signup/registerUser', params).subscribe(result => {
      console.log(result);
    },err => {
      alert("Network Error");
    });
  }

}
