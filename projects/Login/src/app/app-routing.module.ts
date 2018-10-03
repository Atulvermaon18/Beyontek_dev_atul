import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BusniessTypeComponent } from './busniess-type/busniess-type.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPolicyComponent } from './my-policy/my-policy.component';
import { ClaimIntimationComponent } from './claim-intimation/claim-intimation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BusniessTypeComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'policy', component: MyPolicyComponent },
  { path: 'claim-intimation', component: ClaimIntimationComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
