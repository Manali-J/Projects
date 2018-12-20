import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dt-table',
  templateUrl: './dt-table.component.html',
  styleUrls: ['./dt-table.component.css']
})
export class DtTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  DATA:dashboard[] = [
    {id: 1234, application:'App 1', env:[{name: 'UAT', status:'green'}, {name:'SIT', status:'yellow'}], details:'hey '},
    {id: 2345, application:'App 2', env:[{name: 'ISM', status:'green'}, {name:'SIT', status:'yellow'}], details:'hey '}

  ];
  
  HEADERS = ['ID', 'Application', 'Environment', 'Details'];
}

export interface environment
{
  name:string;
  status:string;
}

export interface dashboard
{
  id:number;
  application:string;
  env:environment[];
  details:string;
}
