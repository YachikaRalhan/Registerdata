import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebComponent } from './web/web.component';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo : "login",pathMatch:'full' },
  {path:'login',component: LoginComponent},
  {
    path: 'web', component: WebComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile',component:ProfileComponent},
      { path: 'school', component: SchoolComponent },
      { path: 'college', component: CollegeComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[LoginComponent,WebComponent,SchoolComponent,
  CollegeComponent,DashboardComponent,ProfileComponent]
