import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from'./app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { OverviewComponent } from './overview/overview.component';
import { ReadComponent } from './read/read.component';
import { ReadAddComponent } from './read-add/read-add.component';

import { AppRoutingModule } from './app-routing.module';
import { NoteService } from './note.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    OverviewComponent,
    ReadComponent,
    ReadAddComponent
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
