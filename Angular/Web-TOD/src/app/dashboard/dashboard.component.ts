import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import { Dashboard } from './Dashboard';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {}

  dash_data: Dashboard[];

  ngOnInit() {
    this.doJqueryLoad();
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
     this.getData();
      this.doJqueryLoad();
  });
  
  }


  doJqueryLoad() {
      $('#dash_table').DataTable();
  }
  
  title = "Dashboard View";

  getData()
  {
    
  }

}
