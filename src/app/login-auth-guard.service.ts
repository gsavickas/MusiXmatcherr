import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuardService implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
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

/*@Injectable()
    export class AuthGuard implements CanActivate {
    constructor(userService: OurUserService, private router: Router) {}
        canActivate(): boolean {
            if(this.userService.isLoggedIn){
                return true;
            }
            this.router.navigate(['/login']);
            return false;
        }
    } */