import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowClickComponent } from './row-click.component';

describe('RowClickComponent', () => {
  let component: RowClickComponent;
  let fixture: ComponentFixture<RowClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
