import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { ProductsComponent } from './products/products.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    EmployeeComponent,
    EmployeedetailComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
