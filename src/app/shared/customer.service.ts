import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient,HttpHeaders, HttpErrorResponse  } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl ="http://localhost:8090"; 

  
  constructor(private http:HttpClient) { }


  public form = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('1', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    orderTotal: new FormControl(Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      id:0,
      firstName: '' ,
      lastName: '',
      gender: '',
      email: '',
      address: '',
      city: '',
      state: '', 
      orderTotal:0
    });
  }

  getCustomers() : Observable<Customer[]> {
    return this.http.get <Customer[]> ("http://localhost:8090/api/getAll");

  }

  saveCustomer(customer) : Observable<any>{
    console.log(customer);
    return this.http.post<any>("http://localhost:8090/api/create" ,JSON.stringify(customer),httpOptions);

  }
  
  populateForm(customer){
    this.form.setValue(customer);
    console.log(customer);
  }

  deleteCustomer(id): Observable<any>{
    return this.http.delete("http://localhost:8090/api/delete/"+id,httpOptions);

  }
}

export interface Customer {
  id:number;
  firstName: string;
  lastName: string;
  gender: number;
  email: string;
  address: string;
  city: string;
  state: string;
  orderTotal: number;
}
