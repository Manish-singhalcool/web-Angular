import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AbcComponent } from './abc/abc.component';
import { BcaComponent } from './bca/bca.component';
 import {Input} from '@angular/core';
 import { FormsModule } from '@angular/forms';
import { CrudComponent } from './CrudComponents/crud/crud.component';
import { CrudItemComponent } from './CrudComponents/crud-item/crud-item.component';
import { AddCrudComponent } from './CrudComponents/add-crud/add-crud.component';
import { CompanysComponent } from './companys/companys.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModule/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { ButtonComponent } from './pages/button/button.component';
import { GallaryComponent } from './gallary/gallary.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { ListofemployeeComponent } from './listofemployee/listofemployee.component';
import { EmployeeService } from './services/employee.service';
import { GenderpipePipe } from './genderpipe.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; 
import { MatIconModule, getMatIconNameNotFoundError } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


import { MatSidenavModule } from '@angular/material/sidenav';
import { HealthServiceComponent } from './health-service/health-service.component';
import { EducationServiceComponent } from './education-service/education-service.component';
import { ServiceComponent } from './services/service/service.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationComponent } from './registration/registration.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ManegmentComponent } from './manegment/manegment.component';
import { UploadpdfComponent } from './manegment/uploadpdf/uploadpdf.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { VendorListComponent } from './manegment/vendor-list/vendor-list.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    AbcComponent,
    BcaComponent,
    CrudComponent,
    CrudItemComponent,
    AddCrudComponent,
    CompanysComponent,
    HeaderComponent,
    ButtonComponent,
    GallaryComponent,
    DynamicValidationComponent,
    ListofemployeeComponent,
    GenderpipePipe,
    PagenotfoundComponent,
    HealthServiceComponent,
    EducationServiceComponent,
    ServiceComponent,
    ViewemployeeComponent,
    RegistrationComponent,
    ManegmentComponent,
    UploadpdfComponent,
    VendorListComponent,
    
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
