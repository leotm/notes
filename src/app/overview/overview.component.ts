import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public heading: string = "Notes overview";
  public notes: (string | Date)[][];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
    // this.noteService.getNotes().map(r=>r).subscribe(notes=>this.notes=notes));
  }

}
