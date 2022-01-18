import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCardGridComponent } from './feed-card-grid.component';

describe('FeedCardGridComponent', () => {
  let component: FeedCardGridComponent;
  let fixture: ComponentFixture<FeedCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedCardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
