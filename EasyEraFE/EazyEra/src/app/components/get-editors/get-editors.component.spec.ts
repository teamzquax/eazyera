import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEditorsComponent } from './get-editors.component';

describe('GetEditorsComponent', () => {
  let component: GetEditorsComponent;
  let fixture: ComponentFixture<GetEditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetEditorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
