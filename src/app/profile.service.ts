import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  item;
 
  mydetail = {
    "name": '',
    "age": '',
    "fatherName": '',
    "motherName": ''
  };
 
  constructor() { }
 

  getdetail(){
    localStorage.setItem('key', JSON.stringify(this.mydetail));
    
    this.item = JSON.parse(localStorage.getItem('key'));
     this.item++;
    
    return this.item;
  }
  
}

