import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingTemplateRefComponent } from './using-template-ref.component';

describe('UsingTemplateRefComponent', () => {
  let component: UsingTemplateRefComponent;
  let fixture: ComponentFixture<UsingTemplateRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingTemplateRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
