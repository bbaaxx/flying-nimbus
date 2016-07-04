/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {RegistrationData} from './registration-data';

describe('RegistrationData', () => {
  it('should create an instance', () => {
    expect(new RegistrationData(
      'a','b','c'
    )).toBeTruthy();
  });
});``
