import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DonorLoginComponent } from './donor/donor-login/donor-login.component';
import { DonorRegisterComponent } from './donor/donor-register/donor-register.component';
import { HospitalLoginComponent } from './hospital/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './hospital/hospital-register/hospital-register.component';
import { StaticDetailsComponent } from './common/sidebar/static-details/static-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonorLoginComponent,
    DonorRegisterComponent,
    HospitalLoginComponent,
    HospitalRegisterComponent,
    StaticDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
