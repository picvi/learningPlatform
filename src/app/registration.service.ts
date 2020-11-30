import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient, private router$: Router) {}

  logIn(userDTO: User): void {
    this.http.post('http://localhost:3000/login', userDTO).subscribe(
      (_: any) => {
        console.log(_);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  signUp(userDTO: User): void {
    this.http.post('http://localhost:3000/add-user', userDTO).subscribe(() => {
      this.router$.navigate(['/logIn']);
    });
  }
}
