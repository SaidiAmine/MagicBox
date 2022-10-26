import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  @Input() employees: Employee[];
  sortFlag = true;

  ngOnInit() {}

  sortBy(type: string) {
    this.sortFlag = !this.sortFlag;
    this.employees = this.employees.sort((n1, n2) => {
      if (n1[type] > n2[type]) {
        if (this.sortFlag) return 1;
        else return -1;
      }
      if (n1[type] < n2[type]) {
        if (this.sortFlag) return -1;
        else return 1;
      } else return 0;
    });
  }

}
