import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuinteEditComponent } from './contribuinte-edit.component';

describe('ContribuinteEditComponent', () => {
  let component: ContribuinteEditComponent;
  let fixture: ComponentFixture<ContribuinteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuinteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuinteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
