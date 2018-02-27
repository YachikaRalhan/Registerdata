import { Injectable } from '@angular/core';

@Injectable()
export class CollegeService {

mydetail = {
  "name": '',
  "address": '',
  "marks": ''
};
constructor() { }

getdetail() :any{

  return this.mydetail;
}
}