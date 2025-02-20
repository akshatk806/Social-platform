import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    { id: 1, name: "Akshat" },
    { id: 2, name: "Shivam" },
    { id: 3, name: "Utkarsh" }
  ];

  constructor() { }

  getUsers(): Observable<object> {
    return of(this.users);                           
  } 
  // 'of' creates an obserable
}
