import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  private _listFilter: string = '';
  private errorMessage: string = '';
  filteredEmployees: IEmployee[] = [];
  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) {}

  //ALTERNATIVE CODE OF CONSTRUCTOR
  // private employeeService;
  // constructor(employeeService: EmployeeService) {
  //   this.employeeService = employeeService;
  // }

  ngOnInit() {
    this.sub = this.employeeService.getEmployees().subscribe({
      next: employees => {
        this.employees = employees;
        this.filteredEmployees = this.employees;
      },
      error: err => (this.errorMessage = err)
    });
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter:', value);
    this.filteredEmployees = this.performFilter(value);
  }

  performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
      employee.name.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
