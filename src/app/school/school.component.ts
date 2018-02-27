import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-school',
  template: `
  
   <div *ngIf="editable" class=form>
   <span style="font-weight: bold;">School Name:</span><input [(ngModel)]="name" type="text"><br/>
   <span style="font-weight: bold;">Address:</span><input [(ngModel)]="address" type="text"><br/>
   <span style="font-weight: bold;">Percentage marks:</span><input [(ngModel)]="marks" type="number"><br/>
   <button id= save (click)="save()">Save</button>
   </div>
   
   <div *ngIf="!editable" class=details> 
   <label>School Name:</label>{{school.name}}<br/>
   <label>Address:</label>{{school.address}}<br/>
   <label>Percentage:</label>{{school.marks}}<label>%</label><br/>
   <button id= update (click)="update()">Update</button>
   </div>
  
  `,
  styles: [
    `
    .form,.details,.alter
    {
      position: relative;
      left: 450px;
      top:150px;
    }
    #save{
      width: 120px;
      margin-top: 20px;
      margin-left: 100px;
    }
    #update
    { width:120px
    margin-top: 20px;
     margin-left: 100px;
    }
    label {
      display: inline-block;
      width: 140px;
    }​
    label,span{
      display: inline-block;
      width: 140px;
  }​
    `
  ]
})
export class SchoolComponent implements OnInit {

  public name = ''; 
  public address = ''; 
  public marks = '';
  public editable = true;
  public school;
  constructor(private _schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
    this.school = this._schoolService.getdetail();
    if (this._schoolService.getdetail().name!== '') {
      this.editable = false;
      this.name=this.school.name;
      this.address=this.school.address;
      this.marks=this.school.marks;

  }}
  save() {
    let detail =
      {
        "name": this.name,
        "address": this.address,
        "marks": this.marks
      }
    this.editable=false;
    this._schoolService.mydetail.name = this.name;
    this._schoolService.mydetail.address = this.address;
    this._schoolService.mydetail.marks= this.marks;
    
  }
  update() {
    this.editable = true;
  }
}
