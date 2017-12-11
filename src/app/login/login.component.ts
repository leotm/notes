import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public heading: string = "Login";
  public username: string;
  public password: string;

  constructor(private router: Router, private noteService: NoteService) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'sarah' && this.password === 'sarah123') {
      this.noteService.setUser(this.username);
      this.router.navigate(['/overview']);
    }
    if (this.username === 'ben' && this.password === 'ben123') {
      this.noteService.setUser(this.username);
      this.router.navigate(['/overview']);
    }
    if (this.username === 'henry' && this.password === 'henry123') {
      this.noteService.setUser(this.username);
      this.router.navigate(['/overview']);
    }
    return false;
  }

}
