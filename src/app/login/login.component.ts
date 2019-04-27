import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import { UserServiceService } from '../user-service.service';
import { LoginComponent } from './login.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  User: Object={
    userID: '',
    password: '',
    button(click): ''
  }
  constructor() { }

  ngOnInit() {
  }

}
