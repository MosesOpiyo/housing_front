import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AdminPanelComponent } from './UI/admin-panel/admin-panel.component';
import { HomepageComponent } from './UI/homepage/homepage.component';
import { OptionsComponent } from './UI/options/options.component';
import { ProfileComponent } from './UI/profile/profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'options',component:OptionsComponent},
  {path:'admin-panel',component:AdminPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
