import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwalComponent } from '@toverux/ngx-sweetalert2'
import { SnackBarState } from '../_services/snackbar.model';
import { SnackBarService } from '../_services/snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  private subscription: Subscription;
  @ViewChild('SwalPopup') private SwalPopup: SwalComponent;

  title:string ='';
  status:string ='';

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() {
    this.subscription = this.snackBarService.snackBarState
      .subscribe((data: SnackBarState) => {
        this.title =data.title;
        this.status =data.status;
        
        setTimeout(() => {
          console.log('hide');
          this.SwalPopup.show()
        }, 500);
      });
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
