import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { MatToolbarModule, MatNativeDateModule, MatInputModule, MatCardModule } from '@angular/material';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
