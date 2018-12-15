import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data.service';
import { Dash1Component } from './dash1/dash1.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MaterialComponent } from './material/material.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainPageComponent,
    DashboardComponent,
    Dash1Component,
    MaterialComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
