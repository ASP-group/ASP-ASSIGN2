import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ZenithEvent } from './zenith-event';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
  private BASE_URL = "http://zenithsocietycore2.azurewebsites.net/api/events/";

  constructor(public _http: Http) { }

  getEvent(id: number) : Promise<ZenithEvent[]> {
    return this._http
      .get(this.BASE_URL + id)
      .toPromise()
      .then(response => response.json() as ZenithEvent[]);
  }
}
