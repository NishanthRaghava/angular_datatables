import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveExtensionComponent } from './responsive-extension.component';

describe('ResponsiveExtensionComponent', () => {
  let component: ResponsiveExtensionComponent;
  let fixture: ComponentFixture<ResponsiveExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
