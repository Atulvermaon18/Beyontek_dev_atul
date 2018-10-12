import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  @Output() onNameChanged = new EventEmitter();

  constructor(private router: Router , public postService: PostsService) { }

  ngOnInit() {    
  }

  loginEvent(){
    localStorage.setItem("logged", "Atul");

    let params ={
      "email":"admin@admin.com",
      "password":"Admin@123"
      }
    this.postService.postInputs('login',params).subscribe(result =>{
      console.log(result);
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

}
