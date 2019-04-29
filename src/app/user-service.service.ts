import { Injectable } from '@angular/core';
  

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private user: Object;
  private UserOn: boolean = false;
  constructor() { }


  isLoggedIn(){
    if (this.UserOn)
    {return true} 
    else
    {return false}
  }

  logIn(){
    var UserInstance = localStorage.getItem('user');
    if (UserInstance == this.user){
    this.UserOn = true;
    }
  }

  logOut(){
    this.UserOn = false;
  }

  regFunction(){
    localStorage.setItem('user', JSON.stringify(this.user));
    this.isLoggedIn()
  }
}

/* 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserserveService {

  constructor(private http: HttpClient) { }
  getUserById(id: number){
    return this.http.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
*/