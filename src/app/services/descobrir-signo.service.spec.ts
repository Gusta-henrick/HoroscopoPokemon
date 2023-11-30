import { TestBed } from '@angular/core/testing';

import { DescobrirSignoService } from './descobrir-signo.service';

describe('DescobrirSignoService', () => {
  let service: DescobrirSignoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescobrirSignoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
