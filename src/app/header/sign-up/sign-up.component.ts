import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/users-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UsersDataService]
})
export class SignUpComponent implements OnInit {

  constructor(private usersData: UsersDataService) { }

  form!: FormGroup;
  users!: Array<object>;

  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required, this.checkLength]),
      "userName": new FormControl('', Validators.required)
    });
  }

  checkLength(control:FormControl): {[key: string]:boolean} | null {
    if (control.value.length < 6) {
      return {control: true}
    } return null;
  }

  onSubmit() {
    console.log('Submitted form', this.form);
  }

  showUserData() {
    this.usersData
    .logIn()
    .subscribe((response) => {
      return this.users.push(response);
    });
  }
}
