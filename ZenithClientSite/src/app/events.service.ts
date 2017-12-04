import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ZenithEvent } from './zenith-event';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
  private EVENT_URL = "http://zenithsocietycore2.azurewebsites.net/api/events/";

  constructor(public _http: Http) { }

  getEvent(week: number) : Promise<ZenithEvent[]> {
    return this._http
      .get(this.EVENT_URL + 'week/' + week)
      .toPromise()
      .then(response => response.json() as ZenithEvent[]);
  }
}
