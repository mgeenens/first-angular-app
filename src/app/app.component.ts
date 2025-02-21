import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ServerStatusComponent} from './dashboard/server-status/server-status.component';
import {TrafficComponent} from './dashboard/traffic/traffic.component';
import {TicketsComponent} from './dashboard/tickets/tickets.component';
import {TrafficData} from './model/traffic.model';
import {DUMMY_TRAFFIC_DATA} from './data/dummy-traffic-data';
import {DashboardItemComponent} from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent
  ]
})
export class AppComponent {
  dummyTrafficData = DUMMY_TRAFFIC_DATA;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
}
