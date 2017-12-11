import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

import { NoteService } from '../note.service';

import { AppComponent } from'../app.component';
import { LoginComponent } from '../login/login.component';
import { CreateComponent } from '../create/create.component';
import { OverviewComponent } from '../overview/overview.component';
import { ReadComponent } from '../read/read.component';
import { ReadAddComponent } from '../read-add/read-add.component';

import { APP_BASE_HREF } from '@angular/common';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        CreateComponent,
        OverviewComponent,
        ReadComponent,
        ReadAddComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        NoteService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the heading 'New note'`, async(() => {
    const fixture = TestBed.createComponent(CreateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading).toEqual('New note');
  }));

  it('should have the note service injected', async(() => {
    const fixture = TestBed.createComponent(CreateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.noteService).toBeTruthy();
  }));

  it('should have the note router injected', async(() => {
    const fixture = TestBed.createComponent(CreateComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.router).toBeTruthy();
  }));

  // it('should have a spy that tracks that the spy was called', async(() => {
  //   const fixture = TestBed.createComponent(CreateComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log(app);
  //   spyOn(app, 'addNote');
  //   expect(app.addNote).toHaveBeenCalled();
  // }));
});
