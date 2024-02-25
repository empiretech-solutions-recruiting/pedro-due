import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireTechComponent } from './empire-tech.component';

describe('EmpireTechComponent', () => {
  let component: EmpireTechComponent;
  let fixture: ComponentFixture<EmpireTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpireTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpireTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
