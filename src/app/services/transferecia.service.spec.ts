/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransfereciaService } from './transferecia.service';

describe('Service: Transferecia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransfereciaService]
    });
  });

  it('should ...', inject([TransfereciaService], (service: TransfereciaService) => {
    expect(service).toBeTruthy();
  }));
});
