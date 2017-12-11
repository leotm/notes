import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';

import { NoteService } from '../note.service';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewComponent ],
      providers: [NoteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

    it(`should have the heading 'Notes overview'`, async(() => {
    const fixture = TestBed.createComponent(OverviewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading).toEqual('Notes overview');
  }));

  it('should have the note service injected', async(() => {
    const fixture = TestBed.createComponent(OverviewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.noteService).toBeTruthy();
  }));

  it('should render the table', async(() => {
    const fixture = TestBed.createComponent(OverviewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  }));
});
