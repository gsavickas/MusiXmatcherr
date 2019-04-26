import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from './user-service.service'
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisableLoginAuthGuardService implements CanActivate {
  constructor(private userService: UserServiceService, private router: Router) { }
    canActivate(): boolean{
      // if (!this.userService.isLoggedIn()){   
      //   return true;
      // }
      // // this.router.navigate(['search']);
      // // return false;
      return true; // !Get RID of this after finished!
    }
}
