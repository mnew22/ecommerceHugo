import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceService } from './services/ecommerce.service';
import { EcommerceComponent } from './compenents/ecommerce/ecommerce.component';

const routes: Routes = [
  {path: 'servicios', component: EcommerceService},
  {path: 'ecommerce', component: EcommerceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
