import { Component, OnInit } from '@angular/core';
import {ZenithEvent} from "../zenith-event";
import {EventsService} from "../events.service";

@Component({
  selector: 'app-zenith-event-table',
  templateUrl: './zenith-event-table.component.html',
  styleUrls: ['./zenith-event-table.component.css']
})
export class ZenithEventTableComponent implements OnInit {
  events: ZenithEvent[];
  id: number = 1;
  date = new Date();

  constructor(public eService: EventsService) { }

  ngOnInit() {
    this.getEvent(this.id);
  }

  previous() {
    this.getEvent(--this.id);
  }

  next() {
    this.getEvent(++this.id);
  }

  getEvent(id: number) {
    this.eService.getEvent(id)
      .then(events => this.events = events);
  }
}
