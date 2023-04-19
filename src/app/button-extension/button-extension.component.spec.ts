import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExtensionComponent } from './button-extension.component';

describe('ButtonExtensionComponent', () => {
  let component: ButtonExtensionComponent;
  let fixture: ComponentFixture<ButtonExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
