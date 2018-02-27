import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { SchoolService } from './school.service';
import { CollegeService } from './college.service';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService,ProfileService,SchoolService,CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
