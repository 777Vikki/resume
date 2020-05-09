import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Resume1Component } from './resume1/resume1.component';


const routes: Routes = [
  {
    path: '',
    component: Resume1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Resume1RoutingModule { }
