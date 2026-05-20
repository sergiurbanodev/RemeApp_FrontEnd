import { Routes } from '@angular/router';
import { MainLayout } from '@layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demon-list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'demon-list',
        loadComponent: () => import('@pages/demon-list/demon-list').then((m) => m.DemonList),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'demon-list',
  },
];
