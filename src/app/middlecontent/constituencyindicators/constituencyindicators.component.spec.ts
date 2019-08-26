import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencyindicatorsComponent } from './constituencyindicators.component';

describe('ConstituencyindicatorsComponent', () => {
  let component: ConstituencyindicatorsComponent;
  let fixture: ComponentFixture<ConstituencyindicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstituencyindicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstituencyindicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
