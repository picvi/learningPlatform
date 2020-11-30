import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user-class.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private registr: RegistrationService) {}

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
    const userDTO = new User(
      this.form.controls.email.value,
      this.form.controls.password.value,
      this.form.controls.userName.value
    );
    this.registr.signUp(userDTO);
  }
}
