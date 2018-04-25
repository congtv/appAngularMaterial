import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
// import { ProductAddComponent } from './product/product-add/product-add.component';
// import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
// import { ProductCategoryEditComponent } from './product-category/product-category-edit/product-category-edit.component';
// import { ProductCategoryAddComponent } from './product-category/product-category-add/product-category-add.component';
// import { OrderComponent } from './order/order.component';
// import { MenuComponent } from './menu/menu.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '',redirectTo: 'dashboard',pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      // { path: 'product/add', component: ProductAddComponent },
      // { path: 'product/edit/:id', component: ProductEditComponent },
      { path: 'product-category', component: ProductCategoryComponent },
      // { path: 'add-pc', component: ProductCategoryAddComponent },
      // { path: 'edit-pc/:id', component: ProductCategoryEditComponent },
      // { path: 'order', component: OrderComponent },
      // { path: 'menu', component: MenuComponent }
    ]
  }
];
@NgModule({
  imports:[
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule{}
