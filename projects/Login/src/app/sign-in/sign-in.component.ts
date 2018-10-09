import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  @Output() onNameChanged = new EventEmitter();

  constructor(private router: Router , public service: ServiceService) { }

  ngOnInit() {    
  }

  loginEvent(){
    localStorage.setItem("logged", "Atul");
    // this.service.subject.next('policy');
    // this.router.navigate(['/policy']);
    if(localStorage.getItem('logged') !== null){
      this.service.isLogged = true;
      this.router.navigate(['/policy']);
      console.log('Test');      
    }else{
      // alert("Please login!");
      this.service.isLogged = false;
      this.router.navigate(['/login']);
    }      
  }

}
