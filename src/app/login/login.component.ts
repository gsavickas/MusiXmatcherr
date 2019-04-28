import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
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
  
  constructor(private user: User, private router: Router) {
  }

  ngOnInit() {
  }

}
