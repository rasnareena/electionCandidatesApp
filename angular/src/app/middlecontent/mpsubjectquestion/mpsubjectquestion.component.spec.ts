import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsubjectquestionComponent } from './mpsubjectquestion.component';

describe('MpsubjectquestionComponent', () => {
  let component: MpsubjectquestionComponent;
  let fixture: ComponentFixture<MpsubjectquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpsubjectquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpsubjectquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
