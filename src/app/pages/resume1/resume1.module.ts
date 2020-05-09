import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Resume1RoutingModule } from './resume1-routing.module';
import { Resume1Component } from './resume1/resume1.component';


@NgModule({
  declarations: [Resume1Component],
  imports: [
    CommonModule,
    Resume1RoutingModule
  ]
})
export class Resume1Module { }
