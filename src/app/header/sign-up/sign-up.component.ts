import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private http: HttpClient, private router$: Router) {}

  form!: FormGroup;
  users!: any[];

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.checkLength]),
      userName: new FormControl('', Validators.required)
    });
  }

  checkLength(control: FormControl): { [key: string]: boolean } | null {
    if (control.value.length < 6) {
      return { control: true };
    }
    return null;
  }

  signUp(): void {
    const userDTO = {
      name: this.form.controls.userName.value,
      email: this.form.controls.email.value,
      pass: this.form.controls.password.value
    };
    this.http.post('http://localhost:3000/add-user', userDTO).subscribe(() => {
      this.router$.navigate(['/logIn']);
    });
  }
}
