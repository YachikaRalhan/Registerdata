import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  template: `
  <h1 style="text-align:center">Login </h1>
  <table>
  <fieldset>
  <h2>User-name:<input [(ngModel)]="id" type="text"></h2>
  <h2>Password:<input  [(ngModel)]="pass" type="password"></h2>
  <button (click)="login()">Submit</button>
  </fieldset>
  </table>
  `,
  styles: [
    `
    table{
      width: 50%;
      margin-left: auto;
      margin-right: auto;
  }
    `
  ]
})
export class LoginComponent implements OnInit {

  public id;
  public pass;
  public stud;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.id === this.pass) {
      this._userService.user = this.id;
      this.router.navigate(['/web/dashboard']);
    }
  }
}
