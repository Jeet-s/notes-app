import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    const requestBody = {
      password: this.password,
      email: this.email
    }

    this.appService.api_post('login', requestBody)
      .subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('username', data["data"][0].userName);
          localStorage.setItem('email', data["data"][0].email);
          localStorage.setItem('userid', data["data"][0].userId);
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.log(error);
        }
      );
      
  }

  register(){
    this.router.navigate(['register']);
  }

}
