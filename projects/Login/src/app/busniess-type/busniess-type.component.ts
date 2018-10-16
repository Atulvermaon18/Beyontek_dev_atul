import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalPopupComponent } from 'projects/Login/src/app/modal/modal-popup/modal-popup.component';

@Component({
  selector: 'app-busniess-type',
  templateUrl: './busniess-type.component.html',
  styleUrls: ['./busniess-type.component.css']
})
export class BusniessTypeComponent implements OnInit {

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
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  initiateQuotes(q) {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '300px',
      data: { head: q.head, id: q.id, title: q.title, img: q.img}
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);
    //   if(result.selected === 'new'){
    //     this.router.navigate(['/home']);
    //     this.currentScreen.quotes = true;
    //   }
    //   else if(result.selected === 'existing' || result.selected === 'renew'){
    //     this.router.navigate(['/claimintimation']);
    //     this.currentScreen.quotes = true;
    //   }
    // });
  }

}
