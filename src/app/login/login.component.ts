import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {  }
  
  invalid:boolean=false;

  constructor(private user: UserServiceService, private router: Router) {}

  logIn(userID, password)

  registerSubmit(userID, password)

  userID: string;
  password: string;
  invalid:boolean;

  logIn() {
    this.invalid = this.loginService.logIn(this.userID, this.password)
  }

  ngOnInit() {
  }

}
