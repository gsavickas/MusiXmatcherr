import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {
  User: Object={
    userID: 'test',
    password: 'test'
  }
  
  invalid:boolean=false;

  constructor(private user: UserServiceService, private router: Router) {
  }

  login() {
    console.log("valid")
  }

  ngOnInit() {
  }

}
