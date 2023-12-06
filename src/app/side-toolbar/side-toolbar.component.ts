import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatIconModule],

})
export class SideToolbarComponent {
  tiles = [
    {label: 'table', icon:'table_chart'},
    {label: 'relation', icon: 'arrow_right_alt'}
  ];
}
