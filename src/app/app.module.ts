import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { EmployeeModule } from './employee/employee.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstmoduleModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
