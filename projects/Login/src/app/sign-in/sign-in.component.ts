import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  
  @Output() onNameChanged = new EventEmitter<string>();
  constructor(private router: Router , public service: ServiceService) { }

  ngOnInit() {    
  }

  loginEvent(){
    localStorage.setItem("logged", "Atul");
    this.service.getValues('policy');
    this.onNameChanged.emit('policy');
    this.router.navigate(['/policy']);      
  }

}
