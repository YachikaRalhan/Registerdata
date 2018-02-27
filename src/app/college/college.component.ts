import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-college',
  template: `
  <div *ngIf="editable" class=form>
  <span style="font-weight: bold;">College Name</span><input [(ngModel)]="name" type="text"><br/>
  <span style="font-weight: bold;">Address</span><input [(ngModel)]="address" type="text"><br/>
  <span style="font-weight: bold;">Percentage marks</span><input [(ngModel)]="marks" type="number"><br/>
  <button id=save (click)="save()">Save</button>
  </div>
  <div *ngIf="!editable" class=details> 
  <label>College Name:</label>{{college.name}}<br/>
  <label>Address:</label>{{college.address}}<br/>
  <label>Percentage:</label>{{college.marks}}<label>%</label><br/>
  <button id=update (click)="update()">Update</button>
  </div>
  `,
  styles: [`
  .form,.details{
      position: relative;
      left: 450px;
      top:150px;
    }
    #save {
      width: 120px;
      margin-left: 80px;
      margin-top: 30px;}
    #update{ 
      width:120px;
      margin-left: 15px;
      margin-top: 20px;
    }
    span,label {
      display: inline-block;
      width: 140px;
    }​
    
  `]
})
export class CollegeComponent implements OnInit {

  public name = '';
  public address = ''; 
  public marks = '';
  public editable=true;
  public college;

  constructor(private _collegeService: CollegeService, private router: Router) { }

  ngOnInit() {
    this.college = this._collegeService.getdetail();
    if (this._collegeService.getdetail().name!== '') {
      this.editable = false;
      this.name=this.college.name;
      this.address=this.college.address;
      this.marks=this.college.marks;
  }}
  save() {
    let detail =
      {
        "name": this.name,
        "address": this.address,
        "marks": this.marks
      }
      this.editable=false;
      this._collegeService.mydetail.name = this.name;
      this._collegeService.mydetail.address = this.address;
      this._collegeService.mydetail.marks= this.marks;
      
  }
  update()
  { 
    this.editable = true;
  }

}
