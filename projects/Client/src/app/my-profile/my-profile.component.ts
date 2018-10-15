import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  default_gender = 'Male';
  default_nationality = 'Bangadeshi';

  genders = [
    { value: 'male', viewValue: 'Male'},
    { value: 'female', viewValue: 'Female'}
  ]

  constructor() { }

  ngOnInit() {
  }

  saveClose() {}

}
