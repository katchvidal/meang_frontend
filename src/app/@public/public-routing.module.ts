import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PublicComponent } from './pages/public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule )},
      { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactModule )},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
