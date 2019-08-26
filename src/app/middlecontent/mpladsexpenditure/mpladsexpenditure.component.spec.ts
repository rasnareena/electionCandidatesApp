import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpladsexpenditureComponent } from './mpladsexpenditure.component';

describe('MpladsexpenditureComponent', () => {
  let component: MpladsexpenditureComponent;
  let fixture: ComponentFixture<MpladsexpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpladsexpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpladsexpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
