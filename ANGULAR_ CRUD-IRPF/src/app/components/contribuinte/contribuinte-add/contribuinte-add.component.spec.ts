import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuinteAddComponent } from './contribuinte-add.component';

describe('ContribuinteAddComponent', () => {
  let component: ContribuinteAddComponent;
  let fixture: ComponentFixture<ContribuinteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuinteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuinteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
