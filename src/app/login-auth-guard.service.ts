import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuardService implements CanActivate {
  constructor(private userService: UserServiceService, private router: Router) { }
  canActivate(): boolean{
    // Need to update function in login service "isLoggedIn"
    // if (this.userService.isLoggedIn(){
      return true;
    // }
    this.router.navigate(['login']);
    return false;
  }
}
// Is loggedin method for User
