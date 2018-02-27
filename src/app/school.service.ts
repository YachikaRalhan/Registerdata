import { Injectable } from '@angular/core';

@Injectable()
export class SchoolService {

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