import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      {name:"amt",age:"11",email:"m@gmail.com"},
      {name:"bmt",age:"12",email:"ms@gmail.com"},
      {name:"cmt",age:"13",email:"sm@gmail.com"},
    ]
  }

}
