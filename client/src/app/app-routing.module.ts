import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/transaction',
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
