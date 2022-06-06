import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealProblemsComponent } from './deal-problems.component';

describe('DealProblemsComponent', () => {
  let component: DealProblemsComponent;
  let fixture: ComponentFixture<DealProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealProblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
