import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecctvComponent } from './managecctv.component';

describe('ManagecctvComponent', () => {
  let component: ManagecctvComponent;
  let fixture: ComponentFixture<ManagecctvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecctvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
