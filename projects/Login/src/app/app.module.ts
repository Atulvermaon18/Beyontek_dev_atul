import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { MatToolbarModule, MatNativeDateModule, MatInputModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatMenuModule, MatDialogModule, MatSelectModule,MatCheckboxModule, MatExpansionModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { BusniessTypeComponent } from './busniess-type/busniess-type.component';
import { ModalPopupComponent } from './modal/modal-popup/modal-popup.component';
import { ModalCardComponent } from './modal/modal-card/modal-card.component';
import { ModalBuyplanComponent } from './modal/modal-buyplan/modal-buyplan.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ImgHolderComponent } from './img-holder/img-holder.component';
import { UserPersonalDetailComponent } from './user-personal-detail/user-personal-detail.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { GeneratedQuotesUsersComponent } from './generated-quotes-users/generated-quotes-users.component';
import { ClaimIntimationComponent } from './claim-intimation/claim-intimation.component';
import { MypolicypremiumComponent } from './mypolicy_details/mypolicypremium/mypolicypremium.component';
import { MypolicyclaimComponent } from './mypolicy_details/mypolicyclaim/mypolicyclaim.component';
import { MypolicyrenewComponent } from './mypolicy_details/mypolicyrenew/mypolicyrenew.component';
import { MypolicyviewdetailComponent } from './mypolicy_details/mypolicyviewdetail/mypolicyviewdetail.component';
import { MypolicyquotedetailComponent } from './mypolicy_details/mypolicyquotedetail/mypolicyquotedetail.component';
import { MypolicymakepaymentComponent } from './mypolicy_details/mypolicymakepayment/mypolicymakepayment.component';
import { NewclaimComponent } from './newclaim/newclaim.component';
import { ClaimintimationFormComponent } from './claimintimation-form/claimintimation-form.component';
import { ModalBuynewpolicyComponent } from './modal/modal-buynewpolicy/modal-buynewpolicy.component';
import { ModalVideoComponent } from './modal/modal-video/modal-video.component';
import { MypolicyViewdetailsComponent } from './mypolicy-viewdetails/mypolicy-viewdetails.component';

import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignInComponent,
    BusniessTypeComponent,
    ModalPopupComponent,
    ModalCardComponent,
    ModalBuyplanComponent,
    ModalBuynewpolicyComponent,
    ModalVideoComponent,
    MyProfileComponent,
    MyPolicyComponent,
    UserCardComponent,
    ImgHolderComponent,
    UserPersonalDetailComponent,
    UserPolicyComponent,
    GeneratedQuotesUsersComponent,
    ClaimIntimationComponent,
    MypolicypremiumComponent,
    MypolicyclaimComponent,
    MypolicyrenewComponent,
    MypolicyviewdetailComponent,
    MypolicyquotedetailComponent,
    MypolicymakepaymentComponent,
    NewclaimComponent,
    ClaimintimationFormComponent,
    MypolicyViewdetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  entryComponents: [
    ModalPopupComponent
  ],
  providers: [
    MatDatepickerModule,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
