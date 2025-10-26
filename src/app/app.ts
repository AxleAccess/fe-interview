import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CALENDAR_START_DATE, MOCK_EVENTS } from './mock-events';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  events = MOCK_EVENTS;
  calendarStartDate = CALENDAR_START_DATE;
}
