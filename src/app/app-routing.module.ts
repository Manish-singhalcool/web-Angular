import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CrudComponent } from './CrudComponents/crud/crud.component';
import { AbcComponent } from './abc/abc.component';
import { BcaComponent } from './bca/bca.component';
import { ButtonComponent } from './pages/button/button.component';
import { GallaryComponent } from './gallary/gallary.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { ListofemployeeComponent } from './listofemployee/listofemployee.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServiceComponent } from './services/service/service.component';
import { HealthServiceComponent } from './health-service/health-service.component';
import { EducationServiceComponent } from './education-service/education-service.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { RegistrationComponent } from './registration/registration.component';
import { ManegmentComponent } from './manegment/manegment.component';
import { UploadpdfComponent } from './manegment/uploadpdf/uploadpdf.component';


const routes: Routes = [
  {
    path:'crud',  component: CrudComponent
  },
  {
    path:'about', component: AboutComponent  
  },
  {
     path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'user',  component: UserComponent  
  },
  {
    path:'abc',  component: AbcComponent  
  },
  {
    path:'bca',  component: BcaComponent  
  } ,
  {
    path:'page',  component: ButtonComponent  
  },
  {
    path:'gallary',  component: GallaryComponent  
  } ,
  {
    path:'dynamic-validation',  component: DynamicValidationComponent  
  } ,
  {
    path:'listofemployee',  component: ListofemployeeComponent  
  } ,
  {
    path:'listofemployee/:id',  component: ViewemployeeComponent  
  } ,
  {
    path:'services/service',  component: ServiceComponent,  
    children:[
      {path:'health', component:HealthServiceComponent },
      {path:'education', component:EducationServiceComponent }
    ]
  }, 
  {
    path:'registration',  component: RegistrationComponent  
  } ,
  {
    path:'',  component: ManegmentComponent  
  } ,
  {
    path:'manegment/uploadpdf',  component: UploadpdfComponent  
  } ,
  {
    path:'**',  component: PagenotfoundComponent  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
