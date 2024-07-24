import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  empForm:FormGroup
  item='';
  
  constructor( ){
   
    this.initializeForm()
   
  }

  initializeForm(){
    //this.empForm = this._fb.group({
    this.empForm = new FormGroup ({ 
      userName:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(11)]),
      confirmPassword : new FormControl(),
      gender:new FormControl(),
      city:new FormControl(),
      country:new FormControl()
     
    });

  }
  ngOnInit(): void {
    
  }
  onFormSubmit(){
    if(this.empForm.valid){
    //item:this.empForm;
     console.log(this.empForm);
    }
  }

}
