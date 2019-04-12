import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdaugareService {

  numar: number;
  myjson: any;

  constructor(private http:HttpClient) {
   }
  getArie()
  {
    return this.http.get('https://fiipractic-4a53e.firebaseio.com/arias.json');
  }
  setIteratie(value)
  {
    this.numar=value;
  }
  
  updateArie(updateArie)
  {
    this.myjson='https://fiipractic-4a53e.firebaseio.com/arias.json';
    return this.http.put('https://fiipractic-4a53e.firebaseio.com/arias/'+this.numar+'.json',updateArie);
  }
}
