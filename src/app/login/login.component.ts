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
  
  invalid: boolean= false;
  userID: string;
  password: string;

  constructor(private user: UserServiceService, private router: Router) {}

  logIn() {
    this.invalid = this.UserService.logIn(this.userID, this.password)
  }

  ngOnInit() {
  }

}
