import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "./shared/shared.module";
// =====================  Components =============================//


import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BTechPageComponent } from './pages/b-tech-page/b-tech-page.component';
import { PharmacyPageComponent } from './pages/pharmacy-page/pharmacy-page.component';
import { BComPageComponent } from './pages/b-com-page/b-com-page.component';

// =====================  services =============================//
import { BTechService } from './pages/b-tech-page/b-tech.service';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartService } from './pages/cart-page/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BTechPageComponent,
    PharmacyPageComponent,
    BComPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule,MatFormFieldModule
  ],
  providers: [BTechService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
