import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL= "http://localhost:3000/resto"
  constructor(private _http:HttpClient ) {}

  getRestoList(){
    return this._http.get(this.URL);
   }
 
   addResto(data){
     return this._http.post(this.URL, data);
   }
   deleteResto(id){
     return this._http.delete(`${this.URL}/${id}`)
   }
}
