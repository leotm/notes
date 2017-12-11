import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { NoteService } from '../note.service';

import { AppComponent } from'../app.component';
import { LoginComponent } from '../login/login.component';
import { CreateComponent } from '../create/create.component';
import { OverviewComponent } from '../overview/overview.component';
import { ReadComponent } from '../read/read.component';
import { ReadAddComponent } from '../read-add/read-add.component';

import { APP_BASE_HREF } from '@angular/common';

describe('ReadAddComponent', () => {
  let component: ReadAddComponent;
  let fixture: ComponentFixture<ReadAddComponent>;

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
    fixture = TestBed.createComponent(ReadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the textarea', async(() => {
    const fixture = TestBed.createComponent(ReadAddComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('textarea')).toBeTruthy();
  }));

  it('should render the profile pictures', async(() => {
    const fixture = TestBed.createComponent(ReadAddComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('assets/img/');
  }));
});
