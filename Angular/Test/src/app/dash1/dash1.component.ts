import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@Component({
  selector: 'app-dash1',
  templateUrl: './dash1.component.html',
  styleUrls: ['./dash1.component.css']
})
export class Dash1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Dashboard View';

  settings = {
    actions:false,
    columns: {
      seal_id: {
        title: 'Seal ID'
      },
      application: {
        title: 'Application'
      },
      environment: {
        title: 'Environment'
      },
      description: {
        title: 'Description'
      }
    },
    attr: {
      id: '#dash_table'
    }
  };

  data = [
    {
      seal_id:12345,
      application:'Redwing',
      environment: ['UAT'],
      description:'Tet'
    }
  ];
  
}


