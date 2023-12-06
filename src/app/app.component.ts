import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideToolbarComponent } from './side-toolbar/side-toolbar.component';
import { TabGroupComponent } from './tab-group/tab-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    MatGridListModule,
    ToolbarComponent,
    SideToolbarComponent,
    TabGroupComponent,
  ],
})
export class AppComponent {
  title = 'dbmodeler';
}
