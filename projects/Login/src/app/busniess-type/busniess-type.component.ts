import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busniess-type',
  templateUrl: './busniess-type.component.html',
  styleUrls: ['./busniess-type.component.css']
})
export class BusniessTypeComponent implements OnInit {

  menu = [
    {
      img: '../../assets/img/home/HOME_INSURANCE.png',
      title: 'HOME INSURANCE',
      id: 'home',
      head: 'card'
    },
    {
      img: ' ../../assets/img/home/MEDICAL_INSURANCE.png',
      title: 'MEDICAL INSURANCE',
      id: 'medical',
      head: 'card'
    },
    {
      img: ' ../../assets/img/home/MOTOR_INSURANCE.png',
      title: 'MOTOR INSURANCE',
      id: 'motor',
      head: 'card'
    },
    {
      img: ' ../../assets/img/home/PERSONAL_ACCIDENT_INSURANCE.png',
      title: 'PERSONAL ACCIDENT INSURANCE',
      id: 'accident',
      head: 'card'
    },
    {
      img: ' ../../assets/img/home/HOME_INSURANCE.png',
      title: 'TRAVEL INSURANCE',
      id: 'travel',
      head: 'card'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
