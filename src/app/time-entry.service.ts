import { Injectable } from '@angular/core';
import { TimeEntry } from '../time-entry';

@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {
  protected timeEntryList: TimeEntry[] = []

  constructor() { }

  getAllTimeEntries(): TimeEntry[]{
    return this.timeEntryList;
  }

  getTimeEntryById(id: number): TimeEntry | undefined{
    return this.timeEntryList.find(timeEntry => timeEntry.id === id);
  }
}
