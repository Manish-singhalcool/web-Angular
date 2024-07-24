import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ManegmentService } from '../services/manegment.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-manegment',
  templateUrl: './manegment.component.html',
  styleUrls: ['./manegment.component.css']
})
export class ManegmentComponent implements OnInit{
  form: FormGroup;
  //cardioInputType: any ;
  //example = { name: "", age: "" };
  constructor(
    private fb:FormBuilder,
    private _mService:ManegmentService,
    private _core:CoreService
    ){  }
  // form=this._fb.group({
  //   items:this._fb.array([]),
    
  // });
   
 ngOnInit(): void {
  this.form = this.fb.group({
    items: this.fb.array([])
  });
 }
  get items(){
    return this.form.get('items') as FormArray
  }
  addItem(){
    //  this.items.push(this._fb.group({
    //     name:[''],
    //  })
    //  );
    const item = this.fb.group({
      type: ['name'], // Default to 'text'
      value: ['', this.getValidators('text')]
      //name: ['']
    });
    this.items.push(item);
  }
 
  deleteValue(index:number){
     this.items.removeAt(index);
  }
 
 
  getInputType(type: string): string {
    // Map your type value to HTML input types
    switch (type) {
      case 'text':
      case 'number':
      case 'email':
      case 'password':
        return type;
      default:
        return 'text'; // Default to 'text' if the type is not recognized
    }
  }
  getValidators(type: string): any[] {
    // Define validators based on the type
    switch (type) {
      case 'number':
        return [Validators.required, Validators.pattern(/^\d+$/)];
      case 'email':
        return [Validators.required, Validators.email];
      // Add more cases for other types if needed
      default:
        return [Validators.required];
    }
  }
  getItemNameControl(index: number): AbstractControl {
    const item = this.items.at(index) as FormGroup;
    return item.get('value');
  }
  onFormSubmit(){
    if(this.form.valid){
      this._mService.addManegment(this.items.value).subscribe({
        next:(val :any)=> {
            //alert("add successfully");
            this._core.openSnackBar('add successfully','Done');
            this.form.reset();
        },
        error:(err:any)=>{
          console.log(err);

        }

      })

    }
    console.log(this.form.value);
  }
      // inputType(type) {
      // console.log(type);
      // let inputType;
      // switch (type) {
      // case 'text':
      //   inputType = 'text';
      //   break;
      // case 'numeric':
      //   inputType = 'number';
      //   break;
      // case 'datetime':
      //   inputType = 'date';
      //   break;
      // case 'password':
      //   inputType = 'password';
      //   break;
      // default:
      // }
      // return inputType;
      //   }
}
