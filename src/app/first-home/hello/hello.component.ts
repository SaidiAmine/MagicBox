import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnChanges  {
  @Input() name: string;
  @Input() selectedEmployee: Employee;

  ngOnChanges(changes: SimpleChanges) {
    // EXPLAINED using the onChange lifecycle hook we can
    // detect the applied changes to the @Input property and get different data about
    // the change using the SimpleChange & SimpleChanges classes
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
}
