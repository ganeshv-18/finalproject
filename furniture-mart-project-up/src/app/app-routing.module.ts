import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import {AdminDashboardComponent}from './Admin/admin-dashboard/admin-dashboard.component'
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminUserComponent } from './Admin/admin-user/admin-user.component';
import { CategoryListComponent } from './Admin/category-list/category-list.component';
import { CategoryUpdateComponent } from './Admin/category-update/category-update.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ProductListComponent } from './Admin/product-list/product-list.component';
import { ProductUpdateComponent } from './Admin/product-update/product-update.component';
import { ProductComponent } from './Admin/product/product.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MainFooterComponent } from './layout/footer/footer.component';
import { MainHeaderComponents } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  {path: '', component:LayoutComponent, children: [
  { path: 'Home', component: HomeComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path:'Cart', component: CartComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'order',component:OrderComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'Login',component:LoginComponent}
]},


  { path: 'dashboard', component: AdminDashboardComponent, children: [
    {path:'addadminuser',component:AdminUserComponent},
    {path:'addcategory',component:CategoryComponent},
    {path:'categorylist',component:CategoryListComponent},
    {path: "productCategories/:id/UpdateDetails",component: CategoryUpdateComponent},
    {path: "addproduct",component: ProductComponent },
    {path: "productlist",component: ProductListComponent},
    {path: "Products/:id/UpdateDetails",component: ProductUpdateComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
