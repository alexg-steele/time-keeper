import { Component, inject } from '@angular/core';
import { TimeEntry } from '../../time-entry';
import { TimeEntryService } from '../time-entry.service';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrl: './time-entry.component.css'
})

export class TimeEntryComponent {
  timeEntry: TimeEntry = { id:1, hours:0, description:""}


}
