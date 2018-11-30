import { TestBed } from '@angular/core/testing';

import { LivreService } from './livre.service';

fdescribe('LivreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: LivreService = TestBed.get(LivreService);
    expect(service).toBeTruthy();
  });
});
