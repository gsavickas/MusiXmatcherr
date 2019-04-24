import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListDisplayComponent } from './play-list-display.component';

describe('PlayListDisplayComponent', () => {
  let component: PlayListDisplayComponent;
  let fixture: ComponentFixture<PlayListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
