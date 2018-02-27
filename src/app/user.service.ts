import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  user = '';
  pass='';
  constructor() { }
 getuserid()
 {
   return this.user;
 }
}

