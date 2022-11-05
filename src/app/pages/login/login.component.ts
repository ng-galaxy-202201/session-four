import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.username && this.password) {
      /* this.authService.login({
        username: this.username,
        password: this.password
      }) */
    }
  }

  saveWithNgForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value)
      /* this.authService.login(form.value) */
    }
  }

}
