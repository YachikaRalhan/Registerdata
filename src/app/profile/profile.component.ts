import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  template: `
  <div>
    <div *ngIf="editable" class=form>
    <span style="font-weight: bold;">My name: </span><input [(ngModel)]="name" type="text"><br/>
    <span style="font-weight: bold;">My age: </span><input [(ngModel)]="age" type="number"><br/>
    <span style="font-weight: bold;">Father's name: </span><input [(ngModel)]="fatherName" type="text"><br/>
    <span style="font-weight: bold;">Mother's name: </span><input [(ngModel)]="motherName" type="text"><br/>
    <button id=save (click)="save()">Save</button>
    </div>
  </div>
  <div>
    <div *ngIf="!editable" class=details>
    <label>Name</label>{{name}}<br/>
    <label>Age</label>{{age}}<br/>
    <label>Father's Name</label>{{fatherName}}<br/>
    <label>Mother's Name</label>{{motherName}}<br/>
    <button id=update (click)="Update()">Update</button>
    </div>
  </div>
   `,
  styles: [
    `
  .form,.details,.alter{
    position: relative;
    left: 450px;
    top:150px;
  }
  #save{
    width: 120px;
    margin-top:30px;
    margin-left:70px;
  }
  #update{
    width:120px;
    margin-top:30px;
    margin-left:15px;

  }
  span,label{
      display: inline-block;
      width: 140px;
  }​
  `
  ]
})
export class ProfileComponent implements OnInit {

  public name = '';
  public age;
  public fatherName = '';
  public motherName = '';
  public editable = true;

  public profile;

  constructor(private _profileService: ProfileService, private router: Router) {
  }

  ngOnInit() {
    this.profile = this._profileService.getdetail();
    if (this._profileService.getdetail().fatherName !== '') {
      this.editable = false;
      this.name = this.profile.name;
      this.age = this.profile.age;
      this.fatherName = this.profile.fatherName;
      this.motherName = this.profile.motherName;
    }
  }
  save() {
    let detail =
      {
        "name": this.name,
        "age": this.age,
        "fatherName": this.fatherName,
        "motherName": this.motherName
      }
    this.editable = false;
    this._profileService.mydetail.name = this.name;
    this._profileService.mydetail.age = this.age;
    this._profileService.mydetail.fatherName = this.fatherName;
    this._profileService.mydetail.motherName = this.motherName;
  }
  Update() {
    this.editable = true;
  }
}




