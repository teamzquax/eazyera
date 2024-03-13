import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEventsComponent } from './get-events.component';

describe('GetEventsComponent', () => {
  let component: GetEventsComponent;
  let fixture: ComponentFixture<GetEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
