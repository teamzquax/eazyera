import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootsComponent } from './shoots.component';

describe('ShootsComponent', () => {
  let component: ShootsComponent;
  let fixture: ComponentFixture<ShootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShootsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
