import { TestBed, inject } from '@angular/core/testing';

import { PortalistaService } from './portalista.service';

describe('PortalistaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortalistaService]
    });
  });

  it('should be created', inject([PortalistaService], (service: PortalistaService) => {
    expect(service).toBeTruthy();
  }));
});
