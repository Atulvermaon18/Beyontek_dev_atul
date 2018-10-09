import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BusniessTypeComponent } from './busniess-type/busniess-type.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';
import { ClaimIntimationComponent } from './claim-intimation/claim-intimation.component';
import { MypolicypremiumComponent } from './mypolicy_details/mypolicypremium/mypolicypremium.component';
import { MypolicyrenewComponent } from './mypolicy_details/mypolicyrenew/mypolicyrenew.component';
import { NewclaimComponent } from './newclaim/newclaim.component';
import { MypolicyviewdetailComponent } from './mypolicy_details/mypolicyviewdetail/mypolicyviewdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BusniessTypeComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'policy', component: MyPolicyComponent },
  { path: 'claim-intimation', component: ClaimIntimationComponent },
  { path: 'mypolicypayment', component: MypolicypremiumComponent },
  { path: 'mypolicyrenew', component: MypolicyrenewComponent },
  { path: 'newclaim', component: NewclaimComponent },
  { path: 'mypolicyviewdetails', component: MypolicyviewdetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
