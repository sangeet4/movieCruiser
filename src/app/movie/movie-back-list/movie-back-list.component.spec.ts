import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBackListComponent } from './movie-back-list.component';

describe('MovieBackListComponent', () => {
  let component: MovieBackListComponent;
  let fixture: ComponentFixture<MovieBackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieBackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
