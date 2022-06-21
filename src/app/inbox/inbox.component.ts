import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen',symbol: 'H'},
  {position: 2, name: 'Helium', symbol: 'He'},
  {position: 3, name: 'Lithium', symbol: 'Li'},
  {position: 4, name: 'Beryllium',  symbol: 'Be'},
  {position: 5, name: 'Boron', symbol: 'B'},
  {position: 6, name: 'Carbon', symbol: 'C'},
  {position: 7, name: 'Nitrogen',  symbol: 'N'},
  {position: 8, name: 'Oxygen',   symbol: 'O'},
  {position: 9, name: 'Fluorine',  symbol: 'F'},
  {position: 10, name: 'Neon', symbol: 'Ne'},
];

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }


}
