import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  user = '';
  constructor() { }
 getuserid()
 {
   return this.user;
 }
}

