import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator, MatDialog , MatDialogConfig, MatSortable}  from '@angular/material'; 
import {DataSource} from '@angular/cdk/collections';
import { CustomerComponent } from "../customer/customer.component"
import { Customer, CustomerService } from '../../shared/customer.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})



export class CustomerListComponent implements OnInit {

  constructor(private dialog:MatDialog, 
              private customerService:CustomerService,
              private notificationService: NotificationService) { }

  columns = [
    { columnDef: 'firstName', header: 'First Name.',    cell: (customer: Customer) => `${customer.firstName}` },
    { columnDef: 'lastName',     header: 'Last Name',   cell: (customer: Customer) => `${customer.lastName}`     },
    { columnDef: 'address',   header: 'Address', cell: (customer: Customer) => `${customer.address}`   },
    { columnDef: 'city',   header: 'City', cell: (customer: Customer) => `${customer.city}`   },
    { columnDef: 'state',   header: 'State', cell: (customer: Customer) => `${customer.state}`   },
    { columnDef: 'orderTotal',   header: 'Order Total', cell: (customer: Customer) => `${customer.orderTotal}`   },
  ];

  public listData = new MatTableDataSource<Customer>();
  displayedColumns = this.columns.map(c => c.columnDef).concat(['actions']);
  searchKey: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.listData.sort = this.sort;
    this.customerService.getCustomers().subscribe(
      (customers:Customer[]) => {
     this.listData.data = customers;
       
        this.listData.paginator = this.paginator;
      }); 
  
  }



  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onNewCustomer(){
    this.customerService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "800px";
    dialogConfig.height= "600px"
    const dialogRef = this.dialog.open(CustomerComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(
      data =>  {
        this.customerService.getCustomers().subscribe( customers => 
        this.listData.data = customers ) ;
      }

    );
    
  }


  onEdit(row){
    this.customerService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "800px";
    dialogConfig.height= "600px"
    this.dialog.open(CustomerComponent , dialogConfig );
  }

  onDelete(id){
    if(confirm("Are you sure to delete this customer ?")){
    this.customerService.deleteCustomer(id).subscribe(
      data =>  {this.listData.data = data }
    );

    this.notificationService.warn("::Deleted successfully");
   
    }
  }
}

