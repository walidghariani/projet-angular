import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {CustomerService} from '../../shared/customer.service';
import {NotificationService}from '../../shared/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CustomerComponent> , 
                private customerService:CustomerService,
                private notificationService: NotificationService) { 
     }

  onClear(){
    this.customerService.form.reset();
    this.customerService.initializeFormGroup();
  }

  onClose(){
    this.customerService.form.reset();
    this.customerService.initializeFormGroup();
    this.dialogRef.close();
  }

  onSave(){
   //if(this.customerService.form.valid){
      //console.log(this.customerService.form.value);
      this.customerService.saveCustomer(this.customerService.form.value).subscribe();
      this.customerService.form.reset();
      this.customerService.initializeFormGroup();
      this.dialogRef.close();
      this.notificationService.success("::Submitted successfully");
      this.onClose();
    //}
    
  }

  ngOnInit() {
  }

}
