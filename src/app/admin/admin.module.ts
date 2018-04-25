import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductComponent } from './product/product.component';

import { ProductCategoryService } from './product-category/product-category.service';
import { CommonService } from '../shared/services/common.service';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductCategoryComponent,
    ProductComponent
  ],
  providers:[
    ProductCategoryService,
    CommonService
  ]
})
export class AdminModule { }
