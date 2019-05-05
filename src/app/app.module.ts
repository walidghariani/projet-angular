import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material/material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CdkTableModule } from '@angular/cdk/table';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import {CustomerService} from './shared/customer.service';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomersComponent,
    CustomerComponent,

  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    CdkTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule ,
    
  ],
  exports: [
    CdkTableModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
  entryComponents:[CustomerComponent]
})
export class AppModule { }
