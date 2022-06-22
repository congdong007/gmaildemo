import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../service/api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-starmark',
  templateUrl: './starmark.component.html',
  styleUrls: ['./starmark.component.scss']
})
export class StarmarkComponent implements OnInit {
  displayedColumns: string[] = ['name', 'symbol','time'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        //console.log(res);
        // paginator and sort
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        console.log(err);
      }      
    })
  }

  // filer event process
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

}
