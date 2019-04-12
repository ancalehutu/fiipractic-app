import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  getUser()
  {
    //return this.http.get('https://fiipractic-project.firebaseio.com/users.json');
    return this.http.get('https://fiipractic-4a53e.firebaseio.com/users.json');
  }
  updateUser(updateUser)
  {
    //return this.http.put('https://fiipractic-project.firebaseio.com/users/11.json',updateUser);
    return this.http.put('https://fiipractic-4a53e.firebaseio.com/users/11.json',updateUser);
  }
}
