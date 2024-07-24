import { Component, Input, OnInit, ViewChild } from '@angular/core';
//import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service'; 
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listofemployee',
  templateUrl: './listofemployee.component.html',
  styleUrls: ['./listofemployee.component.css']
})
export class ListofemployeeComponent implements OnInit {

  constructor(private _empService:EmployeeService){ }
  employee:any=[];
  displayedColumns: string[] = ['name', 'username', 'email','address.city','phone','edit']; // ye casesyntistve h jo word api m h like name = name vo hi hone chaye
  dataSource : MatTableDataSource<any>=new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator)matPaginator!:MatPaginator;
  @ViewChild(MatSort)MatSort!:MatSort;
  @Input() FilterText='';
  // employee: Employee[]=[];

  // ngOnInit(): void {
  //   this.employee=this._empService.GetAllEmployee();
  // }
 

  ngOnInit(): void {
    this._empService.GetAllEmployee().subscribe(
      (productData)=>{
        this.employee=productData;
        this.dataSource=new MatTableDataSource<any>(this.employee);
        console.log(this.employee);
        if(this.matPaginator){
          this.dataSource.paginator=this.matPaginator;
        }
        if(this.MatSort){
          this.dataSource.sort=this.MatSort;
        }
      }
    )
  }
  filterData(){
    console.log(this.FilterText);
    this.dataSource.filter=this.FilterText.trim().toLowerCase();
  }
}
