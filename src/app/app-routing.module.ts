import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router1Component } from './routers/router1/router1.component';
import { Router2Component } from './routers/router2/router2.component';
import { HomeComponent } from './routers/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
          redirectTo: 'home',
          pathMatch: 'full',
      },
      {
        path: 'router1',
        component: Router1Component,
      },
      {
        path: 'router2',
        component: Router2Component,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
    { enableTracing: false }
  ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
