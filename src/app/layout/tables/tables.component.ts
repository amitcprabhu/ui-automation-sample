import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import * as data from '../../../assets/example.json';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
  users = [];
  selectedUSers = [];
  totalpages = [];
  recordCount;
  currentPage = 1;
  pageSize = [10, 25, 50, 100];
  page;
  constructor() {
    this.users = data.default;
    this.recordCount = this.page = 10;
    const count = Math.round(this.users.length / this.recordCount);
    for (let index = 1; index <= count; index++) {
      this.totalpages.push(index);
    }
    this.selectedUSers = this.users.slice(0, this.recordCount);
  }

  ngOnInit() {}

  selectingPaging(page) {
    this.currentPage = page;
    const current = (this.currentPage - 1) * this.recordCount;
    this.selectedUSers = this.users.slice(current, Number(current) + Number(this.recordCount));
  }

  selectingNextPaging() {
    if (this.currentPage < this.totalpages.length) {
      this.currentPage = this.currentPage + 1;
      const current = (this.currentPage - 1) * this.recordCount;
      this.selectedUSers = this.users.slice(current, Number(current) + Number(this.recordCount));
    }
  }

  selectingPrevPaging() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      const current = (this.currentPage - 1) * this.recordCount;
      this.selectedUSers = this.users.slice(current, Number(current) + Number(this.recordCount));
    }
  }

  callType(val) {
    this.currentPage = 1;
    this.totalpages = [];
    this.recordCount = val;
    const count = Math.round(this.users.length / this.recordCount);
    for (let index = 1; index <= count; index++) {
      this.totalpages.push(index);
    }
    this.selectedUSers = this.users.slice(0, this.recordCount);
  }
}
