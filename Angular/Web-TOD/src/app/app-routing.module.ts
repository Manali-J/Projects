import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MainPageComponent} from './main-page/main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dash1Component } from './dash1/dash1.component';
import { MaterialComponent } from './material/material.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
{
path: '',
component: MainPageComponent
},

{
  path: 'dash1',
  component: DataTableComponent
},

{
  path: 'dash2',
  component: DashboardComponent
},

{
  path: 'dash3',
  component: DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
