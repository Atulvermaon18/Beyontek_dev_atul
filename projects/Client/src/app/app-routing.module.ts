import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientCustomerServiceComponent } from './client-customer-service/client-customer-service.component';
import { ClientContactusComponent } from './client-contactus/client-contactus.component';
import { ClientClaimIntimationComponent } from './client-claim-intimation/client-claim-intimation.component';
import { MypolicypremiumComponent } from './mypolicy_details/mypolicypremium/mypolicypremium.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ClientHomeComponent },
  { path: 'claimintimation', component: ClientClaimIntimationComponent },
  { path: 'contactus', component: ClientContactusComponent },
  { path: 'customerservice', component: ClientCustomerServiceComponent },
  { path: 'mypolicypremium', component: MypolicypremiumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
