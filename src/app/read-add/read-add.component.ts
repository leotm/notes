import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-read-add',
  templateUrl: './read-add.component.html',
  styleUrls: ['./read-add.component.css']
})
export class ReadAddComponent implements OnInit {

  public heading: string = "This is a note";
  public notes: (string | Date)[][];
  public note: string;

  constructor(private router: Router, private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  addNote() {
    this.noteService.createNote("", this.note);
    this.router.navigate(['/overview']);
  }

}
