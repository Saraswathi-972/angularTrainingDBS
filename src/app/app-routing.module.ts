import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { LoginComponent } from './containers/login/login.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductListComponent} from './containers/product-list/product-list.component';
import { DemoComponent} from './demo/demo.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  // home page : abc.com
  { path: 'product', component: ProductListComponent },

  { path: '', component: DemoComponent },
  // products page : abc.com/products
  // checkout page : abc.com/checkout
  { path: 'login', component: LoginComponent },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  { path: 'check', component: CheckoutComponent },
  { path: 'detail/:pid', component: ProductDetailComponent },
 { path: '**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
