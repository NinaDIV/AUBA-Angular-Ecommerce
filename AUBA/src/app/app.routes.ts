import { Routes } from '@angular/router';

export const routes: Routes = [
  // Storefront
  {
    path: '',
    loadComponent: () => import('./features/products/presentation/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./features/products/presentation/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'vr-room',
    loadComponent: () => import('./storefront/vr-room/vr-room.component').then(m => m.VrRoomComponent)
  },
  
  // Admin Management
  {
    path: 'admin',
    loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'admin/team',
    loadComponent: () => import('./admin/team/team.component').then(m => m.TeamComponent)
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];
