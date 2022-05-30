import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { EmployeeModule } from './employee/employee.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstmoduleModule,
    EmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
