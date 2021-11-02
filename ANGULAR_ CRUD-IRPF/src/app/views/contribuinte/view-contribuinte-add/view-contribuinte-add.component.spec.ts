import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContribuinteAddComponent } from './view-contribuinte-add.component';

describe('ViewContribuinteAddComponent', () => {
  let component: ViewContribuinteAddComponent;
  let fixture: ComponentFixture<ViewContribuinteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContribuinteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContribuinteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
