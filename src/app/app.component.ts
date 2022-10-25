import { Component, OnInit, VERSION } from '@angular/core';
import { Employee, Status } from './models/employee.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  mockedEmployees: Employee[];
  ngOnInit() {
    this.mockedEmployees = this.mockedEmployees = [
      {
        firstName: 'George',
        lastName: 'Clooney',
        salary: 100000,
        currency: {currencyCode: "EUR"},
        status: Status.CONS,
        id: 1,
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

}
