import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username;
  email;
  password;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    const requestBody = {
      userName: this.username,
      password: this.password,
      email: this.email
    }

    this.appService.api_post('register', requestBody)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['login']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  login(){
    this.router.navigate(['login']);
  }
}
