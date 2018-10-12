import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  @Output() onNameChanged = new EventEmitter();
  // loginForm: FormGroup;
  login:{};

  constructor(private router: Router , public service: ServiceService) { }

  ngOnInit() { 
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // });   
  }

  loginEvent(login){
    debugger;
    localStorage.setItem("logged", "Atul");

    // if(localStorage.getItem('logged') !== null){
    //   this.service.isLogged = true;
    //   this.router.navigate(['/policy']);
    //   console.log('Test');      
    // }else{
    
    //   this.service.isLogged = false;
    //   this.router.navigate(['/login']);
    // }      
  }

}
