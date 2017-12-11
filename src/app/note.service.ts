import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { error } from 'util';

@Injectable()
export class NoteService {

  public user = [`sarah`, "Sarah", "Smith", `assets/img/sarah.png`];

  public sampleText: string = "Suspendisse purus justo, hendrerit vitae vestibulum sit amet, dapibus sed arcu. Etiam a fermentum tortor? Ut ut vehicula libero. Aliquam commodo elit et erat tristique vitae.";

  public notes: (string | Date)[][] = [
    ["sarah", "Sarah", "Smith", "Test note", this.sampleText, new Date("2017-11-27T13:09:45"), "assets/img/sarah.png"],
    ["ben", "Ben", "Shapiro", "Test note", this.sampleText, new Date("2017-11-26T13:13:00"), "assets/img/ben.png"],
    ["henry", "Henry", "Jones", "Test note", this.sampleText, new Date("2015-07-28T15:24:00"), "assets/img/henry.png"],
  ];

  // private http: HttpClient
  constructor() { }

  createNote(title, note) {
    const user = this.user, [username, firstName, lastName, imgUrl] = [user[0], user[1], user[2], user[3]];
    this.notes.push([username, firstName, lastName, title, note, new Date(), imgUrl]);
  }

  getNotes(): (string | Date)[][] {
    this.sortNotesByDate();
    return this.notes;
  }

  sortNotesByDate() {
    this.notes.sort((a,b) => {
      return +b[5] - +a[5];
    })
  }

  setUser(username: string) {
    switch(username) {
      case "sarah":
          this.user = [`${username}`, "Sarah", "Smith", `assets/img/${username}.png`];
          break;
      case "ben":
          this.user = [`${username}`, "Ben", "Shapiro", `assets/img/${username}.png`];
          break;
      case "henry":
          this.user = [`${username}`, "Henry", "Jones", `assets/img/${username}.png`];
          break;
    }
  }

  // createUser(username: string, firstName: string, lastName: string, imageUrl: string) {
  //   this.user.push([username, firstName, lastName, imageUrl]);
  // };

  // getNotes(): Observable<any> {
  //   return this.http.get("this.data");
  // }

}
