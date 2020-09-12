import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { customer } from './class/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondapp';

  cust1:customer=new customer("name1","address");
  customers:customer[]=[
   new customer("name1","address"),
    new customer("name2","address"),
    new customer("name3","address")

  ]
  string:string="pradeep";
  customer:customer=undefined;
  newCustomer(form:any){
    let data=form.value;
    let name=data.name;
    let address=data.address;
     this.customer=new customer(name,address);
  }
}
