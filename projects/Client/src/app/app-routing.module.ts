import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientCustomerServiceComponent } from './client-customer-service/client-customer-service.component';
import { ClientContactusComponent } from './client-contactus/client-contactus.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';
import { ClaimIntimationComponent } from './claim-intimation/claim-intimation.component';
import { MypolicypremiumComponent } from './mypolicy_details/mypolicypremium/mypolicypremium.component';
import { MypolicyrenewComponent } from './mypolicy_details/mypolicyrenew/mypolicyrenew.component';
import { NewclaimComponent } from './newclaim/newclaim.component';
import { MypolicyviewdetailComponent } from './mypolicy_details/mypolicyviewdetail/mypolicyviewdetail.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CustomersupportComponent } from './customersupport/customersupport.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ClientHomeComponent },
  { path: 'contactus', component: ClientContactusComponent },
  { path: 'customerservice', component: ClientCustomerServiceComponent },
  { path: 'mypolicypremium', component: MypolicypremiumComponent },
  { path: 'mypolicyrenew', component: MypolicyrenewComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'resetpassword', component: ChangepasswordComponent },
  { path: 'policy', component: MyPolicyComponent },
  { path: 'claim-intimation', component: ClaimIntimationComponent },
  { path: 'mypolicypayment', component: MypolicypremiumComponent },
  { path: 'mypolicyrenew', component: MypolicyrenewComponent },
  { path: 'newclaim', component: NewclaimComponent },
  { path: 'mypolicyviewdetails', component: MypolicyviewdetailComponent },
  { path: 'customersupport', component: CustomersupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
