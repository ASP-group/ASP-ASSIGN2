import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenithEventTableComponent } from './zenith-event-table.component';

describe('ZenithEventTableComponent', () => {
  let component: ZenithEventTableComponent;
  let fixture: ComponentFixture<ZenithEventTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenithEventTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenithEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
