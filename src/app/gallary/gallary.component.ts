import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  PhotoPath:string='';
  ShowPriview=false;
   constructor(){}
   CheckPreview(){
      this.ShowPriview = !this.ShowPriview;
   }
   SendData(data:any){
    
   }
}
