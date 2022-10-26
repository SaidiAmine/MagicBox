import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent implements OnInit {
  @Input() employees: Employee[];
  @Output() selectedEmployee = new EventEmitter<Employee>();
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

  selectEmployee(employee: any) {
    this.selectedEmployee.emit(employee);
  }

}
