import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeedetailComponentComponent } from './employee-component/employeedetail-component/employeedetail-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'employees', component: EmployeeComponentComponent },
      {
        path: 'employees/:id',
        component: EmployeedetailComponentComponent
      },
      { path: 'welcome', component: WelcomeComponentComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    EmployeeComponentComponent,
    StarComponent,
    WelcomeComponentComponent,
    EmployeedetailComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
