import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { MOCK_EVENTS, CalendarEvent } from './mock-events';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private events: CalendarEvent[] = [...MOCK_EVENTS];

  /**
   * Get events within a date range
   * Simulates a GET /api/events?startDate=X&endDate=Y call with 300ms delay
   */
  getEventsByDateRange(startDate: string, endDate: string): Observable<CalendarEvent[]> {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const filtered = this.events.filter(event =>
      event.dates.some(dateStr => {
        const date = new Date(dateStr);
        return date >= start && date <= end;
      })
    );

    return of(filtered).pipe(delay(300));
  }
}
