import { TestBed, async, inject } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AppComponent } from'./app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { OverviewComponent } from './overview/overview.component';
import { ReadComponent } from './read/read.component';
import { ReadAddComponent } from './read-add/read-add.component';

import { AppRoutingModule } from './app-routing.module';

import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
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
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
