import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCardListComponent } from './feed-card-list.component';

describe('FeedCardListComponent', () => {
  let component: FeedCardListComponent;
  let fixture: ComponentFixture<FeedCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
