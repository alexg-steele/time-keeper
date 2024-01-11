import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    ProjectComponent,
    TimeEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
