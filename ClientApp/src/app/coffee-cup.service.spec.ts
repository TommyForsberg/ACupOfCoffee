import { TestBed, inject } from '@angular/core/testing';

import { CoffeeCupService } from './coffee-cup.service';

describe('CoffeeCupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeCupService]
    });
  });

  it('should be created', inject([CoffeeCupService], (service: CoffeeCupService) => {
    expect(service).toBeTruthy();
  }));
});
