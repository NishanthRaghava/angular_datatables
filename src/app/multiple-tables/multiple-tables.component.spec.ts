import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTablesComponent } from './multiple-tables.component';

describe('MultipleTablesComponent', () => {
  let component: MultipleTablesComponent;
  let fixture: ComponentFixture<MultipleTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
