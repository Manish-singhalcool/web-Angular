import { Component,EventEmitter,Output } from '@angular/core';
import { Crud } from 'src/app/Crud';

@Component({
  selector: 'app-add-crud',
  templateUrl: './add-crud.component.html',
  styleUrls: ['./add-crud.component.css']
})
export class AddCrudComponent {
  
    title1:string;
    desc:string;
    @Output() crudAdd: EventEmitter<Crud> = new EventEmitter();
    constructor(){
        this.title1 = '';
        this.desc = '';
    }
    onSubmit(){
      const crud:Crud = {
        sno:8,
        title: this.title1,
        desc: this.desc,
        active: true

      }
      this.crudAdd.emit(crud);
    }
    
}
