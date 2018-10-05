import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { MatToolbarModule, MatNativeDateModule, MatInputModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatMenuModule, MatDialogModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
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
    ClaimintimationFormComponent
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
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    ModalPopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
