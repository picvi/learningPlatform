import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/users-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private usersData: UsersDataService) {}

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

  onSubmit(): void {
    console.log('Submitted form', this.form);
  }

  // showUserData(): void {
  //   this.usersData.signUp().subscribe((response) => {
  //     return this.users.push(response);
  //   });
  // }
}
