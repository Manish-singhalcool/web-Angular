import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import  {Crud} from 'src/app/Crud';
@Component({
  selector: 'app-crud-item',
  templateUrl: './crud-item.component.html',
  styleUrls: ['./crud-item.component.css']
})
export class CrudItemComponent implements OnInit {
  @Input() crud: Crud;
  @Input() i: number;
  @Output() crudDelete: EventEmitter<Crud>= new EventEmitter();
  @Output() crudCheckboxClick: EventEmitter<Crud>= new EventEmitter();
 
  constructor(){
    this.crud = {} as Crud; 
    this.i=0; 
  }
  Onclick(crud:Crud){
    this.crudDelete.emit(crud);
    //console.log("this is delete");
  }
  OnCheckBoxClick(crud:Crud){
    this.crudCheckboxClick.emit(crud);
  }
  ngOnInit(): void {
    
  }
}
