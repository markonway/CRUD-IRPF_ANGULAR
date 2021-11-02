import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuinteTableListComponent } from './contribuinte-table-list.component';

describe('ContribuinteTableListComponent', () => {
  let component: ContribuinteTableListComponent;
  let fixture: ComponentFixture<ContribuinteTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuinteTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuinteTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
