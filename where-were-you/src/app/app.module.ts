import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { FriendsComponent } from './friends/friends.component';
import { EnterActivityComponent } from './enter-activity/enter-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityFeedComponent,
    FriendsComponent,
    EnterActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
