import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})

export class ViewemployeeComponent implements OnInit {
  //displayedColumns: string[] = ['name']; // ye casesyntistve h jo word api m h like name = name vo hi hone chaye
 
  //dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();
  Id: string|undefined|null;
  
  //employeeValue:any=[];
  toodes:any=[];
  user:any={
    id:0,
    name:'',
    username:''
  }
  constructor(private readonly employeeService:EmployeeService,private readonly route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)=>{
          this.Id= params.get("id");
          if(this.Id){
            this.employeeService.GetViewEmployee(this.Id).subscribe(
                (employeeData)=>{
                  this.user=employeeData;
                  //this.dataSource=new MatTableDataSource<any>(this.employeeValue);
                  console.log(this.user);
                }
            )
          }
      }

    )
    this.employeeService.GetAllToodes().subscribe(
       (toodList)=>{
        this.toodes=toodList;
       }
    )
  }
  
}
