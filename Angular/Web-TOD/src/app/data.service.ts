import { Injectable, Output, EventEmitter } from '@angular/core'
import {Dashboard} from './dashboard/Dashboard';
import {dash_data} from './dashboard/Dashboard';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  @Output() change: EventEmitter<boolean> = new EventEmitter();


  getDashboardData(): Dashboard[]
  {
    return dash_data;
  }
}
