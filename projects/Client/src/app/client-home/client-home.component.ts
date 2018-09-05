import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  menu = [
    {
      img: '../../assets/img/cars.jpg',
      title: 'HOME INSURANCE',
      id: 'home'
    },
    {
      img: ' ../../assets/img/home.jpg',
      title: 'MEDICAL INSURANCE',
      id: 'medical'
    },
    {
      img: ' ../../assets/img/cars.jpg',
      title: 'MOTOR INSURANCE',
      id: 'motor'
    },
    {
      img: ' ../../assets/img/home.jpg',
      title: 'PERSONAL ACCIDENT INSURANCE',
      id: 'accident'
    },
    {
      img: ' ../../assets/img/cars.jpg',
      title: 'TRAVEL INSURANCE',
      id: 'travel'
    }
  ];
  currentScreen = {
    quotes: false
  }
  msg = "Hi There";
  constructor() {

  }

  onNotify(message: string): void {
    alert(message);
  }

  initiateQuotes(q) {
    this.currentScreen.quotes = true;
  }

  ngOnInit() {
  }

}
