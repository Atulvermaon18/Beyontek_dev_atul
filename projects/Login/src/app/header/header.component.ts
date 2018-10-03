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
  imageBind: any;

  languages = [
    { value: 'english', viewValue: 'English', img: '../../assets/img/flag/usa.png', default: true },
    { value: 'mexico', viewValue: 'Mexico', img: '../../assets/img/flag/mexico.png', default: false  },
    { value: 'spanish', viewValue: 'Spanish', img: '../../assets/img/flag/spain.png', default: false },
    { value: 'arabic', viewValue: 'Arabic', img: '../../assets/img/flag/uae.png', default: false }
  ];

  details = [
    { value: 'profile', viewValue: 'Profile', img: '../../assets/img/login/name.png'},
    { value: 'change password', viewValue: 'Change Password', img: '../../assets/img/login/name.png'},
    { value: 'document', viewValue: 'Document', img: '../../assets/img/login/name.png'},
    { value: 'logout', viewValue: 'Logout', img: '../../assets/img/login/name.png'}
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {}
  
  bindFlagData(data) {
    this.languageBind = data.viewValue;
    this.imageBind = data.img;
  }

  bindData(data) {
    
  }

  ngOnInit() {
    this.languageBind = 'English';
    this.imageBind = '../../assets/img/flag/usa.png';
  }

  }
