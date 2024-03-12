import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetshootersComponent } from './getshooters.component';

describe('GetshootersComponent', () => {
  let component: GetshootersComponent;
  let fixture: ComponentFixture<GetshootersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetshootersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetshootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
