import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
  standalone: true,
  imports: [MatTabsModule],
})
export class TabGroupComponent {

  get models() {
    return this.dataService.Models;
  }

  constructor(
    private dataService: DataService
  ) {}
  };  
