import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './compenents/ecommerce/ecommerce.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './compenents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
