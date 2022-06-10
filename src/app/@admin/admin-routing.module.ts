import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
      { path: 'genres', loadChildren: () => import('./pages/genres/genres.module').then(m => m.GenresModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
