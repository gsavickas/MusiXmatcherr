import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserServiceService } from '../user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",

     }
    passwordConfirm: "string"


    submit(e){
      e.preventDefault()
    }


constructor(private userService: UserServiceService) { }

// user: User


registerSubmit(){
  this.userService registerSubmit(this.user)
}

  ngOnInit() {
  }

}