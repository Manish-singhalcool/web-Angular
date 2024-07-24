import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent {
   @Input() title: string

   OnChanges(){
    console.log('on title');
    
   }
  name:any
  data ={
    name:'manish',
    age:27
  }
  today= Date();
  person=[{
    id:1,
    name:'abc',
    gender:0
  },{
    id:2,
    name:'bca',
    gender:1
  },{
    id:3,
    name:'ms',
    gender:3
  }]
}
