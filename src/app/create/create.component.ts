import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public heading: string = "New note";
  public title: string;
  public note: string;

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
  }

  addNote() {
    this.noteService.createNote(this.title, this.note);
    this.router.navigate(['/overview']);
  }

}
