import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatNativeDateModule, MatInputModule, MatCardModule, MatMenuModule, MatExpansionModule, MatChipsModule } from '@angular/material';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientContactusComponent } from './client-contactus/client-contactus.component';
import { ClientCustomerServiceComponent } from './client-customer-service/client-customer-service.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { BuyInsuranceModalComponent } from './buy-insurance-modal/buy-insurance-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { ImgHolderComponent } from './img-holder/img-holder.component';
import { ClientGetQuotesComponent } from './client-get-quotes/client-get-quotes.component';
import { ModalPopupComponent } from './modal/modal-popup/modal-popup.component';
import { UserPersonalDetailComponent } from './user-personal-detail/user-personal-detail.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { GeneratedQuotesUsersComponent } from './generated-quotes-users/generated-quotes-users.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { MypolicypremiumComponent } from './mypolicy_details/mypolicypremium/mypolicypremium.component';
import { MypolicyclaimComponent } from './mypolicy_details/mypolicyclaim/mypolicyclaim.component';
import { MypolicyrenewComponent } from './mypolicy_details/mypolicyrenew/mypolicyrenew.component';
import { MypolicyviewdetailComponent } from './mypolicy_details/mypolicyviewdetail/mypolicyviewdetail.component';
import { MypolicyquotedetailComponent } from './mypolicy_details/mypolicyquotedetail/mypolicyquotedetail.component';
import { MypolicymakepaymentComponent } from './mypolicy_details/mypolicymakepayment/mypolicymakepayment.component';
import { UserDetailPreviewComponent } from './user-detail-preview/user-detail-preview.component';
import { ModalCardComponent } from './modal/modal-card/modal-card.component';
import { ModalBuyplanComponent } from './modal/modal-buyplan/modal-buyplan.component';


import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ClaimIntimationComponent } from './claim-intimation/claim-intimation.component';
import { NewclaimComponent } from './newclaim/newclaim.component';
import { ClaimintimationFormComponent } from './claimintimation-form/claimintimation-form.component';


import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptorService } from './_services/loader-interceptor.service';
import { ModalBuynewpolicyComponent } from './modal/modal-buynewpolicy/modal-buynewpolicy.component';
import { ModalVideoComponent } from './modal/modal-video/modal-video.component';
import { SummaryWidgetComponent } from './summary-widget/summary-widget.component';
import { ModalCompareplansComponent } from './modal/modal-compareplans/modal-compareplans.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientHomeComponent,
    ClientContactusComponent,
    ClientCustomerServiceComponent,
    QuotesFormComponent,
    BuyInsuranceModalComponent,
    TranslatePipe,
    ImgHolderComponent,
    ClientGetQuotesComponent,
    ModalPopupComponent,
    UserPersonalDetailComponent,
    UserPolicyComponent,
    GeneratedQuotesUsersComponent,
    QuotesDetailComponent,
    MypolicypremiumComponent,
    MypolicyclaimComponent,
    MypolicyrenewComponent,
    MypolicyviewdetailComponent,
    MypolicyquotedetailComponent,
    MypolicymakepaymentComponent,
    UserDetailPreviewComponent,
    ModalCardComponent,
    ModalBuyplanComponent,
    LoaderComponent,
    ModalBuynewpolicyComponent,
    ModalVideoComponent,
    SummaryWidgetComponent,
    ModalCompareplansComponent,
    MyProfileComponent,
    MyPolicyComponent,
    UserCardComponent,
    ClaimIntimationComponent,
    NewclaimComponent,
    ClaimintimationFormComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatChipsModule
  ],
  entryComponents: [
    ModalPopupComponent
  ],
  providers: [
    TranslateService,
    MatDatepickerModule,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private translate: TranslateService) {
    translate.use('en').then(() => {
      console.log(translate.data);
    });
  }
}
