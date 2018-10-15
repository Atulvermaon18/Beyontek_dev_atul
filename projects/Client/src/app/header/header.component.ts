import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatMenu } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PostsService } from '../_services/posts.service';


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
    { value: 'profile', viewValue: 'Profile', img: '../../assets/img/home_icon/Profile1.png'},
    { value: 'change password', viewValue: 'Change Password', img: '../../assets/img/home_icon/Change_Password1.png'},
    { value: 'document', viewValue: 'Document', img: '../../assets/img/home_icon/Document1.png'},
    { value: 'logout', viewValue: 'Logout', img: '../../assets/img/home_icon/Logout1.png'}
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public router: Router, public postService: PostsService) {}
  
  bindFlagData(data) {
    this.languageBind = data.viewValue;
    this.imageBind = data.img;    
  }

  bindData(data) {
    if(data.viewValue == 'Profile'){
      this.router.navigate(['/profile']);
    }
    else if(data.viewValue == 'Resetpassword'){
      // localStorage.clear();
      this.postService.isLogged = false;
      this.router.navigate(['/resetpassword']);
    }
    else if(data.viewValue == 'Logout'){
      // localStorage.clear();
      this.postService.isLogged = false;
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    // var ch = this.service.subject.getValue();
    this.languageBind = 'English';
    this.imageBind = '../../assets/img/flag/usa.png';
    if(localStorage.getItem('logged') !== null){
      this.postService.isLogged = true;
      this.router.navigate(['/policy']);
      console.log('Test');      
    }else{
      // alert("Please login!");
      // this.postService.isLogged = false;
      this.router.navigate(['/home']);
    }
  }

  }
