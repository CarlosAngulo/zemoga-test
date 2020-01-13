import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteBoardComponent } from './vote-board.component';

describe('VoteBoardComponent', () => {
  let component: VoteBoardComponent;
  let fixture: ComponentFixture<VoteBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
