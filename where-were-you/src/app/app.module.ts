import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

//custom imports
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { FriendsComponent } from './friends/friends.component';
import { EnterActivityComponent } from './enter-activity/enter-activity.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityFeedComponent,
    FriendsComponent,
    EnterActivityComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
