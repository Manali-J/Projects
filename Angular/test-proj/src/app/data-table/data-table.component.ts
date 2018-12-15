import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'env'];
  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.paginator, this.sort);
  }

  tempDataSource:any;
  private applyFilter(filterValue:string)
  {
    this.tempDataSource = new MatTableDataSource(this.dataSource.data);
    this.tempDataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource = this.tempDataSource;
  }
}
