import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRootComponent } from './consultation-root.component';

describe('ConsultationRootComponent', () => {
  let component: ConsultationRootComponent;
  let fixture: ComponentFixture<ConsultationRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
