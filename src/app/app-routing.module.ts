import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorLoginComponent } from './donor/donor-login/donor-login.component';
import { DonorRegisterComponent } from './donor/donor-register/donor-register.component';
import { HospitalLoginComponent } from './hospital/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './hospital/hospital-register/hospital-register.component';
import { DonorDashboardComponent } from './donor/donor-dashboard/donor-dashboard.component';
import { DonorProfileComponent } from './donor/donor-profile/donor-profile.component';
import { HospitalDashboardComponent } from './hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalProfileComponent } from './hospital/hospital-profile/hospital-profile.component';

const routes: Routes = [
  { path:'',redirectTo:'donor-login', pathMatch: 'full' },
  { path: 'hospital-registration', component: HospitalRegisterComponent },
  { path: 'donor-registration', component: DonorRegisterComponent  },
  { path: 'hospital-login', component: HospitalLoginComponent  },
  { path: 'donor-login', component: DonorLoginComponent  },
  { path: 'donor/dashboard', component: DonorDashboardComponent  },
  { path: 'donor/profile', component: DonorProfileComponent  },
  { path: 'hospital/dashboard', component: HospitalDashboardComponent  },
  { path: 'hospital/profile', component: HospitalProfileComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
