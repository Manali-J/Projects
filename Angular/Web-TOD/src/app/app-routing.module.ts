import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MainPageComponent} from './main-page/main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{
path: '',
component: MainPageComponent
},

{
  path: 'dash1',
  component: DashboardComponent
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
