/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GeolocationService } from './shared/geolocation.service';
import { Coords } from './shared/coords';

import { MappitupComponent } from './mappitup.component';

describe('Component: Mappitup', () => {
  it('should create an instance', () => {
    let component = new MappitupComponent(new GeolocationService);
    expect(component).toBeTruthy();
  });
});
