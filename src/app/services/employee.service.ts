import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient:HttpClient) { }
  // private listofallemployee:Employee[]=[
  //     {
  //       id:1,
  //       name:'test',
  //       gender: 'male',
  //       email:'m@gmail.com'
  //     },
  //     {
  //       id:2,
  //       name:'mstone',
  //       gender: 'male',
  //       email:'l@gmail.com'
  //     },{
  //       id:3,
  //       name:'testing',
  //       gender: 'male',
  //       email:'l@gmail.com'
  //     }
  // ]

  // GetAllEmployee() : Employee[] {
  //   return this.listofallemployee;
   
  // }
  GetAllEmployee() : Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users');
  }
  GetViewEmployee(id:string) : Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users/'+id);
  }
  GetAllToodes() : Observable<any>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
