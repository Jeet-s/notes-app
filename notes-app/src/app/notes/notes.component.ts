import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createNote(){
    this.router.navigate(['notes/create-note']);
  }

}
