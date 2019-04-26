import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
User: Object= {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  passwordConfirm: "",

  submit(e){
    e.preventDefault()
    console.log()
  }



}
  constructor() { }

  ngOnInit() {
  }

}
