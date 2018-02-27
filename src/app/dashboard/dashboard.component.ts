import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-dashboard',
  template: `
        <div class="button" *ngIf="webDetail.name === '' ">
        <button (click)="add_detail()">Add-Details</button>
        </div>

        <div  class="info" *ngIf="webDetail.name !== '' ">
        <label>Name:</label>{{webDetail.name}}><br/>
        <label>My-age:</label>{{webDetail.age}}
        </div>
`,
  styles: [`
    .button{
    position: relative;
    left: 500px;
    top:250px;}
    .info {
      position: relative;
      left: 400px;
      top:150px;}
   `]
})
export class DashboardComponent implements OnInit {

  public webDetail;
  public detail;
  constructor(private _profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.webDetail = this._profileService.getdetail();
  }
  add_detail() {

    this.router.navigate(['/web/profile']); 
  }
  
}
