import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user_name;
  email;
  user_id

  constructor( private appService: AppService) { 
    this.user_name = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.user_id = localStorage.getItem('userid');

    this.appService.api_get('/notes/' + this.user_id)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

  }

  ngOnInit() {
  }

}
