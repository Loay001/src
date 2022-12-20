import { Injectable } from '@angular/core';


interface emp { 
  id : number,
  name: string, 
  cpr: string,
  phone: string,
  email: string,
  shift: string
}

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  private employees : emp[]= [
    {id: 1, name: "Ali",cpr: "252525", phone: "1313133", email: "sss@adm.com", shift: "morning"},
    {id: 2, name: "Ali",cpr: "252525", phone: "1313133", email: "sss@adm.com", shift: "morning"},
  ];
  lastid=2;
  constructor() { }

  addEmp(name, cpr, phone, email, shift){
    let id =++this.lastid;
    this.employees.push({id , name,cpr, phone, email, shift})
    console.log(this.employees)
  }

}
