import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {

  name;
  cpr;
  phone;
  email;
  shift;

  constructor(public datasrv: EmployeeService,public route: Router) { }

  ngOnInit() {
  }

  save (){
    this.route.navigateByUrl('/')
    this.datasrv.addEmp(this.name,this.cpr,this.phone,this.email,this.shift)
  }

}
