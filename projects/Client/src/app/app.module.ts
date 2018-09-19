import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientClaimIntimationComponent } from './client-claim-intimation/client-claim-intimation.component';
import { ClientContactusComponent } from './client-contactus/client-contactus.component';
import { ClientCustomerServiceComponent } from './client-customer-service/client-customer-service.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { BuyInsuranceModalComponent } from './buy-insurance-modal/buy-insurance-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { ImgHolderComponent } from './img-holder/img-holder.component';
import { ClientGetQuotesComponent } from './client-get-quotes/client-get-quotes.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPersonalDetailComponent } from './user-personal-detail/user-personal-detail.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { GeneratedQuotesUsersComponent } from './generated-quotes-users/generated-quotes-users.component';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientHomeComponent,
    ClientClaimIntimationComponent,
    ClientContactusComponent,
    ClientCustomerServiceComponent,
    QuotesFormComponent,
    BuyInsuranceModalComponent,
    TranslatePipe,
    ImgHolderComponent,
    ClientGetQuotesComponent,
    ModalPopupComponent,
    UserProfileComponent,
    UserPersonalDetailComponent,
    UserPolicyComponent,
    GeneratedQuotesUsersComponent
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
    HttpClientModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
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
