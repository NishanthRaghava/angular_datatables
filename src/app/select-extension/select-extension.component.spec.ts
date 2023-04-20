import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExtensionComponent } from './select-extension.component';

describe('SelectExtensionComponent', () => {
  let component: SelectExtensionComponent;
  let fixture: ComponentFixture<SelectExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
