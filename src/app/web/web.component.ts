import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-web',
  template: `
  <div>
  <header>
  <img src="/desktop/workspace/logo.jpeg" alt="logo" style="width:50px;height:50px;">
  <h1 style="float:right">User-name:{{web_user}}</h1>
  </header>

  <nav>
    <ul>
         <li><button (click)='profile()'>Profile</button></li>
         <li><button (click)='college()'>College</button></li>
         <li><button (click)='school()'>School</button></li>
    </ul>
  </nav>
  </div>
  
  
 
  
<router-outlet></router-outlet>
  
  `,
  styles: [
    `
    div {
      width: 100%;
      border: 1px solid gray;
  }
  
  header {
      padding: 2.5em;
      color: white;
      background-color: black;
      
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
    
    `
  ]
})
export class WebComponent implements OnInit {

  public web_user;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.web_user = this._userService.getuserid();
  }
  profile() {

  }
  college() {

  }
  school() 
  {

  }

}
