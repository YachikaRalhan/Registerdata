import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  mydetail = {
    "name": '',
    "age": '',
    "fatherName": '',
    "motherName": ''
  };
  constructor() { }

  getdetail() :any{

    return this.mydetail;
  }
}