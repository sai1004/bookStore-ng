import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BTechPageComponent } from './pages/b-tech-page/b-tech-page.component';
import { PharmacyPageComponent } from './pages/pharmacy-page/pharmacy-page.component';
import { BComPageComponent } from './pages/b-com-page/b-com-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';


const routes: Routes = [
  {path:'', component:BTechPageComponent},
  {path:'pharmacy', component:PharmacyPageComponent},
  {path:'bcom', component:BComPageComponent},
  {path:'cart', component:CartPageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
