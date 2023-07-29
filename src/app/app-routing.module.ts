import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { DashboredComponent } from './components/dashbored/dashbored.component';
import { authGuard } from './core/Guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: "login" , pathMatch: "full"},
  {path : 'login', component: LoginComponent },
  {path : 'products', component: ProductsComponent , canActivate:[authGuard] },
  {path : 'dashboard', component: DashboredComponent , canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
