import { TestBed } from '@angular/core/testing';

import { DatosClasesService } from './datosclases.service';

describe('ServicesdatosService', () => {
  let service: DatosClasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosClasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
