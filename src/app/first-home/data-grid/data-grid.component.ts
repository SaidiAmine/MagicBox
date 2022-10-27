import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
})
export class DataGridComponent implements OnInit {
  @Input() employees: Employee[] = [];
  @Output() selectedEmployee = new EventEmitter<Employee>();
  sortFlag = true;

  ngOnInit() {}

  // EXPLAINED sort method implementing the .sort logic in the array employees
  sortBy(type: string) {
    this.sortFlag = !this.sortFlag;
    this.employees = this.employees.sort((n1, n2) => {
      // EXPLAINED here we are dynamically accessing the objects property
      // for a type = firstName passed from the view we will be accessing => n1.firstName
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

  // EXPLAINED passing the selected table row ( employee ) to the parent component
  // throught the @Output decorator // https://angular.io/guide/inputs-outputs
  selectEmployee(employee: any) {
    this.selectedEmployee.emit(employee);
  }

}
