import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationRootComponent } from './administration-root.component';

describe('AdministrationRootComponent', () => {
  let component: AdministrationRootComponent;
  let fixture: ComponentFixture<AdministrationRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
