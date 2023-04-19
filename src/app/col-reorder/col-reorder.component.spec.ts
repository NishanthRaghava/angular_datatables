import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColReorderComponent } from './col-reorder.component';

describe('ColReorderComponent', () => {
  let component: ColReorderComponent;
  let fixture: ComponentFixture<ColReorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColReorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
