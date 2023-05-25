/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WheatherService } from './wheather.service';

describe('Service: Wheather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheatherService]
    });
  });

  it('should ...', inject([WheatherService], (service: WheatherService) => {
    expect(service).toBeTruthy();
  }));
});
