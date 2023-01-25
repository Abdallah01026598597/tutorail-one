import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RewardComponent } from './reward/reward.component';
import { RightbarComponent } from './rightbar/rightbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RewardComponent,
    RightbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
