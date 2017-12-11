import { TestBed, inject } from '@angular/core/testing';

import { NoteService } from './note.service';

// import { HttpClientModule } from '@angular/common/http';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpClientModule
      ],
      providers: [
        NoteService
      ]
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));

  it('should contain test user sarah', inject([NoteService], (service: NoteService) => {
    expect(service.user).toBeTruthy();
  }));

  it('should contain example notes', inject([NoteService], (service: NoteService) => {
    expect(service.notes).toBeTruthy();
  }));
});
