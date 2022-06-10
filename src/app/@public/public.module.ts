import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './pages/public/public.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
