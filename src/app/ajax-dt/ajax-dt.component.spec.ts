import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDtComponent } from './ajax-dt.component';

describe('AjaxDtComponent', () => {
  let component: AjaxDtComponent;
  let fixture: ComponentFixture<AjaxDtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxDtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
