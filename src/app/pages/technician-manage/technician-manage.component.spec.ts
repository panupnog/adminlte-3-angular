import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianManageComponent } from './technician-manage.component';

describe('TechnicianManageComponent', () => {
  let component: TechnicianManageComponent;
  let fixture: ComponentFixture<TechnicianManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
