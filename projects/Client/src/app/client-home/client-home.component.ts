import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { ModalPopupComponent } from '../modal/modal-popup/modal-popup.component';
import { QuotesFormComponent } from '../quotes-form/quotes-form.component';
import {PostsService} from '../_services/posts.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  menu = [
    {
      img: 'assets/img/home/HOME_INSURANCE.png',
      title: 'HOME INSURANCE',
      id: 'home',
      head: 'card'
    },
    {
      img: 'assets/img/home/MEDICAL_INSURANCE.png',
      title: 'MEDICAL INSURANCE',
      id: 'medical',
      head: 'card'
    },
    {
      img: 'assets/img/home/MOTOR_INSURANCE.png',
      title: 'MOTOR INSURANCE',
      id: 'motor',
      head: 'card'
    },
    {
      img: 'assets/img/home/PERSONAL_ACCIDENT_INSURANCE.png',
      title: 'PERSONAL ACCIDENT INSURANCE',
      id: 'accident',
      head: 'card'
    },
    {
      img: 'assets/img/home/HOME_INSURANCE.png',
      title: 'TRAVEL INSURANCE',
      id: 'travel',
      head: 'card'
    }
  ];

  // menu : any = {};
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' }
  ];

  currentScreen = {
    quotes: false
  };
  msg = 'Hi There';
  constructor(public dialog: MatDialog, public router: Router, public service: PostsService) {
    //  this.service.getLineOfBusiness().subscribe(result =>{
    //   console.log(result)
    // })
  }

  onNotify(message: string): void {
    alert(message);
  }

  initiateQuotes(q) {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '300px',
      data: { head: q.head, id: q.id, title: q.title, img: q.img }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result.selected === 'new') {
        this.router.navigate(['/home']);
        this.currentScreen.quotes = true;
      } else if (result.selected === 'existing' || result.selected === 'renew') {
        this.router.navigate(['/claimintimation']);
        this.currentScreen.quotes = true;
      }
    });
  }

  ngOnInit() {
  }
  addSlide() {
    this.items.push({
      title: `Slide 4`
    });
  }

}
