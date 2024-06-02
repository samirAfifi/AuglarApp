import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './compnonet/product/product.component';
import { RegisterComponent } from './compnonet/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product',component:ProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
