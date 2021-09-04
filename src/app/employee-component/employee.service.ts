import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>('https://609e2e9f33eed80017957f8d.mockapi.io/employee')
      .pipe(
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error Occured:${err.error.message}`;
    } else {
      errorMessage = `Server returned code:${err.status}, error message is:${
        err.message
      }`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
