import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {routes} from './task.router';
import {TaskDashboardComponent} from './component/task-dashboard/task-dashboard.component';
import {CalendarModule} from 'angular-calendar';
import {CalendarComponent} from './component/calendar/calendar.component';
import {EventFormComponent} from './component/calendar/event-form/event-form.component';
import {CalendarService} from './component/calendar/calendar.service';
import {QuickTaskComponent} from './component/quick-task/quick-task.component';
import {SharedModule} from '../core/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CalendarModule.forRoot()
  ],
  providers: [
    CalendarService
  ],
  declarations: [TaskDashboardComponent, CalendarComponent, EventFormComponent, QuickTaskComponent],
  entryComponents: [EventFormComponent]
})

export class TaskModule {
}
