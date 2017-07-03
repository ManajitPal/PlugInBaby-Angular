import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FanComponent } from './fan/fan.component';
import { EmployerComponent } from './employer/employer.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'employer',
    component: EmployerComponent
  },
  {
    path: 'artist',
    component: ArtistComponent
  },
  {
    path: 'fan',
    component: FanComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
