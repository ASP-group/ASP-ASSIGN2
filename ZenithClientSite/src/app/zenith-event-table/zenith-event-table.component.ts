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
  groupedEvents: ZenithEvent[][];
  id: number = 0;
  date = new Date();

  constructor(public eventService: EventsService) { }

  ngOnInit() {
    this.getEvent(this.id);
  }

  previous() {
    this.getEvent(--this.id);
  }

  next() {
    this.getEvent(++this.id);
  }

  getEvent(week: number) {
    this.eventService.getEvent(week)
      .then(events => {
        this.events = events;
        this.groupedEvents = new Array<Array<ZenithEvent>>();
        for (let i = 0; i < 7; i++) {
          this.groupedEvents[i] = new Array<ZenithEvent>();
        }
        this.events.forEach(element => {
          this.groupedEvents[new Date(element.eventDate).getDay() - 1].push(element)
        });
      });
  }
}
