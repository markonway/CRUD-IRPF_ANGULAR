import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContribuinteListComponent } from './view-contribuinte-list.component';

describe('ViewContribuinteListComponent', () => {
  let component: ViewContribuinteListComponent;
  let fixture: ComponentFixture<ViewContribuinteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContribuinteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContribuinteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
