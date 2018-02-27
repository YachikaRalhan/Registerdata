import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-web',
  template: `
  <div>
  <header>
  <img src="../assets/logo.jpeg" alt="logo" style="width:50px;height:50px;">
  <span style="float:right">User-name:{{web_user}}</span>
  </header>
  <div class="container">
    <div class="nav-wrapper">
    <nav>
      <ul>
          <li><button (click)='dashboard()'>Dashboard</button></li>
          <li><button (click)='profile()'>Profile</button></li>
          <li><button (click)='school()'>School</button></li>
          <li><button (click)='college()'>College</button></li>   
      </ul>
    </nav>
    </div>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  <div>

  </div>

  `,
  styles: [
    `
    .container{
      display:flex;
      flex-direction : row;
      width:100%;
    }
  .nav-wrapper
  {
    background: grey;
    height:700px;
    border:solid 1px black;
  }
  
  header {
      color: white;
      background-color: black;
      padding: 6px;
      padding-left: 20px
  }
  nav {
      float: left;
      max-width: 160px;
      margin: 0;
      padding: 1em;
      
  }
  nav ul {
    list-style-type: none;
    padding: 0;
}

.main-content{
  border: solid 1px black;
  width: 100%;
  background:white;
}

button{
  width: 120px;
}

    `
  ]
})
export class WebComponent implements OnInit {

  public web_user;
  constructor(private _userService: UserService,private router: Router) { }

  ngOnInit() {
    this.web_user = this._userService.getuserid();
  }
  profile() {
    this.router.navigate(['/web/profile']);
  }
  college() {
    this.router.navigate(['/web/college']);
  }
  school() {
  this.router.navigate(['/web/school'])
  }
  dashboard()
  {
    this.router.navigate(['/web/dashboard']);
  }

}
