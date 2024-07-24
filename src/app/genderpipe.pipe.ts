import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
    transform(name: string , gender : any): string {
      if(gender==0){
        return 'Mr.'+name;
        //return 'male';
      }
      return 'Mis.'+name;
      //return 'Female';
    }

}
