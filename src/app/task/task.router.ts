import {Routes} from '@angular/router';
import {TaskModule} from './task.module';
import {TaskDashboardComponent} from './component/task-dashboard/task-dashboard.component';
import {CalendarComponent} from './component/calendar/calendar.component';
import {QuickTaskComponent} from './component/quick-task/quick-task.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: TaskDashboardComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'quick',
    component: QuickTaskComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
