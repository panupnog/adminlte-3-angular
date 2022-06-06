import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReheasalsComponent } from './list-reheasals.component';

describe('ListReheasalsComponent', () => {
  let component: ListReheasalsComponent;
  let fixture: ComponentFixture<ListReheasalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReheasalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReheasalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
