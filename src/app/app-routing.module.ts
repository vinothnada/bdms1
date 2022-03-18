import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorLoginComponent } from './donor/donor-login/donor-login.component';
import { DonorRegisterComponent } from './donor/donor-register/donor-register.component';
import { HospitalLoginComponent } from './hospital/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './hospital/hospital-register/hospital-register.component';

const routes: Routes = [
  { path: 'hospital-registration', component: HospitalRegisterComponent },
  { path: 'donor-registration', component: DonorRegisterComponent  },
  { path: 'hospital-login', component: HospitalLoginComponent  },
  { path: 'donor-login', component: DonorLoginComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
