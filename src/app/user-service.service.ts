import { Injectable } from '@angular/core';
  

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private passUser: Object; // To be a user object 
  private UserOn: boolean = false;
  constructor() { }


  isLoggedIn(){
    if (this.UserOn)
    {return true} 
    else
    {return false}
  }

  logIn(user: Object){
    var userInstance = JSON.parse(localStorage.getItem('passUser'));
    if (userInstance.userName == user.userName && userInstance.userPassword == this.user.userPassword){
    this.UserOn = true;

    }
  }

  logOut(){
    this.UserOn = false;
  }

  regFunction(user: Object){
    localStorage.setItem('passUser', JSON.stringify(this.passUser));
    this.isLoggedIn()
  }
}
