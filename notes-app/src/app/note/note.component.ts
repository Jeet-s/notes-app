import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-notes',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NotesComponent implements OnInit {

  mode;
  user_id;
  title;
  content;
  noteId
  edited = false;
  heading;

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {

    this.user_id = localStorage.getItem('userid');

    this.route.queryParams.subscribe(params => {
      this.mode = params["mode"];
      this.noteId = params["noteId"];
    });

    if(this.mode === 'view'){
      this.heading = 'Note Details'
      this.appService.api_get('/note/' + this.noteId)
      .subscribe(
        (data) => {
          console.log(data);
          this.content = data[0].content;
          this.title = data[0].name;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.heading = 'Create Note'
      this.edited = true;
    }

  }

  ngOnInit() {
  }

  createNote(){

    let requestBody = {
      name: this.title,
      content: this.content,
      userId: this.user_id
    }

    this.appService.api_post('notes', requestBody)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  saveNote(){
    let requestBody = {
      name: this.title,
      content: this.content,
      userId: this.user_id,
      noteId: this.noteId
    }
    console.log(requestBody, 'bjjbhjbjb');

    this.appService.api_put('note', requestBody)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.log(error);
        }
      );

  }

  back(){
    this.router.navigate(['dashboard']);
  }

  editNote(){
    this.edited = true;
    this.heading = 'Edit Note'
  }

}
