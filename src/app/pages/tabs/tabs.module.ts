import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'products',
        loadChildren: '../products/products.module#ProductsPageModule',
      },
      {
        path: 'transactions',
        loadChildren:
          '../transactions/transactions.module#TransactionsPageModule',
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
