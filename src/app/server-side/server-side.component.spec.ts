import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideComponent } from './server-side.component';

describe('ServerSideComponent', () => {
  let component: ServerSideComponent;
  let fixture: ComponentFixture<ServerSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
