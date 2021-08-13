import { TestBed } from '@angular/core/testing';

import { GeometriaService } from './geometria.service';

describe('GeometriaService', () => {
  let service: GeometriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeometriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
