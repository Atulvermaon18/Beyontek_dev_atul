import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackBarService } from '../_services/snack-bar.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2'
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { SnackBarState } from '../_services/snackbar.model';


@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  /* message: string = 'Saved Successfully';
  actionButtonLabel: string = 'Ok';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'; */
  private subscription: Subscription;
  @ViewChild('SwalPopup') private SwalPopup: SwalComponent;
  
  /* addExtraClass: boolean = false;
  showMessage: boolean = false; */
  title:string ='';
  status:string ='';
  constructor(public snackBar: MatSnackBar,private snackBarService: SnackBarService) { }

  /* open() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  } */
  
  ngOnInit() {
    this.subscription = this.snackBarService.snackBarState
      .subscribe((data: SnackBarState) => {
        //this.open();
        //this.showMessage = true;
        this.title =data.title;
        this.status =data.status;
        
        setTimeout(() => {
          console.log('hide');
          this.SwalPopup.show()
          //this.showMessage = false;
        }, 500);
      });
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
