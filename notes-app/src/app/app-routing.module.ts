import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './notes/create-note/create-note.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'notes',
    children: [
      {
        path: '',
        component: NotesComponent
      },
      {
        path: 'create-note',
        component: CreateNoteComponent
      }
    ]
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
