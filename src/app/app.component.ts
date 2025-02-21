import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ServerStatusComponent} from './dashboard/server-status/server-status.component';
import {TrafficComponent} from './dashboard/traffic/traffic.component';
import {TicketsComponent} from './dashboard/tickets/tickets.component';
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
export class AppComponent implements OnInit {
  dummyTrafficData = DUMMY_TRAFFIC_DATA;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.85) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000);
  }

}

