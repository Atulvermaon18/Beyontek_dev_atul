import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatMenu } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() matMenu = MatMenu;

  languageBind: string;
  userBind: string;
  imageBind: any;
  isLogged:boolean = false;

  user = [
    { value: 'profile', viewValue: 'Profile', img: '../../assets/img/flag/usa.png', default: true },
    { value: 'changepassword', viewValue: 'Change Password', img: '../../assets/img/flag/mexico.png', default: false  },
    { value: 'document', viewValue: 'Document', img: '../../assets/img/flag/spain.png', default: false },
    { value: 'logout', viewValue: 'Logout', img: '../../assets/img/flag/uae.png', default: false }
  ];

  languages = [
    { value: 'english', viewValue: 'English', img: '../../assets/img/flag/usa.png', default: true },
    { value: 'mexico', viewValue: 'Mexico', img: '../../assets/img/flag/mexico.png', default: false  },
    { value: 'spanish', viewValue: 'Spanish', img: '../../assets/img/flag/spain.png', default: false },
    { value: 'arabic', viewValue: 'Arabic', img: '../../assets/img/flag/uae.png', default: false }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {}
  
  bindData(data) {
    this.languageBind = data.viewValue;
    this.imageBind = data.img;
    
  }

  ngOnInit() {
    this.languageBind = 'English';
    this.userBind = 'Atul';
    this.imageBind = '../../assets/img/flag/usa.png';
    if(localStorage.getItem('logged') !== null){
      this.router.navigate(['/profile']);
      console.log('Test');
      this.isLogged = true;
    }else{
      alert("Please login!");
      this.isLogged = false;
      this.router.navigate(['/login']);
    }
  }

  }
