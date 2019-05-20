import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, NavigationExtras } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user_name;
  email;
  user_id
  notes: any;

  constructor( private appService: AppService, private router: Router) {

    this.user_name = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.user_id = localStorage.getItem('userid');

    this.appService.api_get('/notes/' + this.user_id)
      .subscribe(
        (data) => {
          console.log(data);
          this.notes = data;
        },
        (error) => {
          console.log(error);
        }
      );

  }

  ngOnInit() {
  }

  createNote(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         mode: "create"
      }
  };
    this.router.navigate(["note"], navigationExtras);
  }

  deleteNote(id){
    this.appService.api_delete('/note/' + id)
      .subscribe(
        (data) => {
          console.log(data);
          this.notes = this.notes.filter(x => x.noteId !== id);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  viewNote(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
         mode: "view",
         noteId: id
      }
  };
    this.router.navigate(["note"], navigationExtras);
  }

}
