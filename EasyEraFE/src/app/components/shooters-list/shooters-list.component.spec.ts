import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootersListComponent } from './shooters-list.component';

describe('ShootersListComponent', () => {
  let component: ShootersListComponent;
  let fixture: ComponentFixture<ShootersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShootersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShootersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
