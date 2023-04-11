import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchingDtInstancesComponent } from './fetching-dt-instances.component';

describe('FetchingDtInstancesComponent', () => {
  let component: FetchingDtInstancesComponent;
  let fixture: ComponentFixture<FetchingDtInstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchingDtInstancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchingDtInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
