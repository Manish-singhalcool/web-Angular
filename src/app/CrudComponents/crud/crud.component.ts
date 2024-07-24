import { Component } from '@angular/core';
import  { Crud } from '../../Crud';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']

})
export class CrudComponent {
        localitem:string | null;
        index:any;
        cruds:Crud[];
        count:any;
        aa:any;
        totalactive:any=0;
        constructor(){
        this.localitem=localStorage.getItem("cruds");

          if(this.localitem == null)
            { 
              this.cruds=[]
            }else{
              this.cruds=JSON.parse(this.localitem);
              
              var aa:any=this.cruds.map(vendor =>{
                if(vendor.active==false){
                  this.totalactive+=1;
                }
              });
              console.log(this.totalactive,"totalactive");
            }
        }
        deleteCrud(crud:Crud){ 
          console.log(crud);
          const index = this.cruds.indexOf(crud);
          if(this.cruds[index].active==false){
            this.totalactive-=1;
          }
          this.cruds.splice(index,1);
          localStorage.setItem("cruds",JSON.stringify(this.cruds));
        }
        addCrud(crud:Crud){ 
          console.log(crud);
          this.cruds.push(crud);
          localStorage.setItem("cruds",JSON.stringify(this.cruds));

        }
        toggelCrud(crud:Crud){
          const index= this.cruds.indexOf(crud);
          this.cruds[index].active = !this.cruds[index].active;
          
         
            if(this.cruds[index].active==false){
              this.totalactive+=1;
            }else{
              this.totalactive-=1;
            }
          localStorage.setItem("cruds",JSON.stringify(this.cruds));
          console.log(index);
          
        }
        
}
