import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDtOptionsPromiseComponent } from './load-dt-options-promise.component';

describe('LoadDtOptionsPromiseComponent', () => {
  let component: LoadDtOptionsPromiseComponent;
  let fixture: ComponentFixture<LoadDtOptionsPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadDtOptionsPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDtOptionsPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
