import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import { UserServiceService } from '../user-service.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
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
  
  constructor(private api: ApiService, private router: Router) {
  }

  tryLogin() {
    this.api.login(
      this.userID,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        r => {
          alert(r.error.error);
        });
  }
  ngOnInit() {
  }

}
