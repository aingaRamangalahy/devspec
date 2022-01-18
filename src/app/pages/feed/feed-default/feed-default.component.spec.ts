import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDefaultComponent } from './feed-default.component';

describe('FeedDefaultComponent', () => {
  let component: FeedDefaultComponent;
  let fixture: ComponentFixture<FeedDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
