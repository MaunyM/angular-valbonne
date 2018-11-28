import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationListeLivresComponent } from './consultation-liste-livres.component';

describe('ConsultationListeLivresComponent', () => {
  let component: ConsultationListeLivresComponent;
  let fixture: ComponentFixture<ConsultationListeLivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationListeLivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationListeLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
