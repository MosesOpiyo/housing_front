import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomepageComponent } from './UI/homepage/homepage.component';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { HouseCarosselComponent } from './UI/homepage/sub-components/house-carossel/house-carossel.component';
import { HousingOptionsComponent } from './UI/homepage/sub-components/housing-options/housing-options.component';
import { HousingFooterComponent } from './UI/homepage/sub-components/housing-footer/housing-footer.component';
import { ProfileComponent } from './UI/profile/profile.component';
import { RecommendedComponent } from './UI/homepage/sub-components/recommended/recommended.component';
import { OptionsComponent } from './UI/options/options.component';
import { AdminPanelComponent } from './UI/admin-panel/admin-panel.component';
import { ProNavbarComponent } from './UI/pro-navbar/pro-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    HouseCarosselComponent,
    HousingOptionsComponent,
    HousingFooterComponent,
    ProfileComponent,
    RecommendedComponent,
    OptionsComponent,
    AdminPanelComponent,
    ProNavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
