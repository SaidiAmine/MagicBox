import { Component, OnInit, VERSION } from '@angular/core';
import { Employee, Status } from '../models/employee.model';

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html'
})
// EXPLAINED this component follows the smart-dumb components design,
// FirstHomeComponent acts like a controller and dispatches the data to its child components
// Child components ( or dumb components ) which are DataGridComponent and 
// HelloComponent act like views, their primary objective is to display data passed
// through the @Input
export class FirstHomeComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  // EXPLAINED this attribute containes the mocked data to be shown
  mockedEmployees: Employee[] = [];
  // EXPLAINED empty object that will get the selected data from the child component data-grid
  selectedEmployee: Employee = {};

  ngOnInit() {
    this.mockedEmployees = this.mockedEmployees = [
      {
        firstName: 'George',
        lastName: 'Clooney',
        salary: 100000,
        currency: {currencyCode: "EUR"},
        status: Status.CONS,
        id: 1,
        description: 'One of the fanciest actors in the world!'
      },
      {
        firstName: 'Jennifer',
        lastName: 'Aniston',
        salary: 25000,
        currency: {currencyCode: "USD"},
        status: Status.IC,
        id: 2,
      },
      {
        firstName: 'Jennifer',
        lastName: 'Lawrance',
        currency: {currencyCode: "INR"},
        salary: 45000,
        status: Status.IC,
        id: 3,
      },
      {
        firstName: 'Johnny',
        lastName: 'Depp',
        salary: 10,
        currency: {currencyCode: "USD"},
        status: Status.RETIRED,
        id: 4,
      },
      {
        firstName: 'Brad',
        lastName: 'Pitt',
        salary: 250000,
        currency: {currencyCode: "CNY"},
        status: Status.CONS,
        id: 5,
      },
      {
        firstName: 'Marion',
        lastName: 'Cotillard',
        salary: 650000,
        currency: {currencyCode: "EUR"},
        status: Status.CONS,
        id: 6,
      }
    ];
  }

  updateCurrentEmployee(selectedEmployee: any) {
    this.selectedEmployee = selectedEmployee;
  }
}