import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { EmployeeModule } from './employee/employee.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { Router1Component } from './routers/router1/router1.component';
import { Router2Component } from './routers/router2/router2.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    ContactComponent,
    Router1Component,
    Router2Component
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
