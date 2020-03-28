import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsgoComponent } from './osgo.component';

describe('OsgoComponent', () => {
  let component: OsgoComponent;
  let fixture: ComponentFixture<OsgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
