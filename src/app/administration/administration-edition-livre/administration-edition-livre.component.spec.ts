import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEditionLivreComponent } from './administration-edition-livre.component';

describe('AdministrationEditionLivreComponent', () => {
  let component: AdministrationEditionLivreComponent;
  let fixture: ComponentFixture<AdministrationEditionLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationEditionLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationEditionLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
