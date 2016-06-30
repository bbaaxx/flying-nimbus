import { Injectable, provide } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Coords } from './coords';

const GEOLOCATION_ERRORS = {
	'errors.location.unsupportedBrowser': 'Geolocation not supported in this platform',
	'errors.location.permissionDenied': 'User rejected access location data',
	'errors.location.positionUnavailable': 'Unable to find location',
	'errors.location.timeout': 'Service timeout has been reached'
};

// Inspired by https://gist.github.com/sasha7/0c32f3686eb49d44ccc8
@Injectable()
export class GeolocationService {

  constructor() {}

  getLocation(options?) : Observable<any> {
    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        // Do the geolocation thing
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position.coords);
            observer.complete();
          }
          , (error) => {
            observer.error( this.makeErrorMessage(error) );
          }
          // Pass options to the geolocation service
          , options
        );
      } else {
        observer.error(this.makeErrorMessage());
      }
    });
  }

  watchPosition(watcherId: string) {}

  clearWatch(watcherId: string) {}

  private makeErrorMessage(error?) : string {
    let errorMessage : string;
    switch (error.code) {
      case 1:
        errorMessage = GEOLOCATION_ERRORS['errors.location.permissionDenied'];
        break;
      case 2:
        errorMessage = GEOLOCATION_ERRORS['errors.location.positionUnavailable'];
        break;
      case 3:
        errorMessage = GEOLOCATION_ERRORS['errors.location.timeout'];
        break;
      default:
        errorMessage = GEOLOCATION_ERRORS['errors.location.unsupportedBrowser'];
        break;
    }
    return errorMessage;
  }

}
