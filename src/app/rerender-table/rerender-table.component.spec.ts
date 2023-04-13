import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerenderTableComponent } from './rerender-table.component';

describe('RerenderTableComponent', () => {
  let component: RerenderTableComponent;
  let fixture: ComponentFixture<RerenderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerenderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerenderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
