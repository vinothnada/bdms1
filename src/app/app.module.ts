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
import { DonorDashboardComponent } from './donor/donor-dashboard/donor-dashboard.component';
import { DonorProfileComponent } from './donor/donor-profile/donor-profile.component';
import { HospitalDashboardComponent } from './hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalProfileComponent } from './hospital/hospital-profile/hospital-profile.component';
import { DonorNavigationComponent } from './common/donor-navigation/donor-navigation.component';
import { AdminNavigationComponent } from './common/admin-navigation/admin-navigation.component';
import { DonorHeaderComponent } from './common/donor-header/donor-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonorLoginComponent,
    DonorRegisterComponent,
    HospitalLoginComponent,
    HospitalRegisterComponent,
    StaticDetailsComponent,
    DonorDashboardComponent,
    DonorProfileComponent,
    HospitalDashboardComponent,
    HospitalProfileComponent,
    DonorNavigationComponent,
    AdminNavigationComponent,
    DonorHeaderComponent,
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
