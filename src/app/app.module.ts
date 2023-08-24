import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

// ngx-mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import {
  provideEnvironmentNgxCurrency,
  NgxCurrencyDirective,
  NgxCurrencyInputMode,
} from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    SidebarComponent,
    BodyComponent,
    ProductFormComponent,
    MessagesComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgxCurrencyDirective,
  ],
  providers: [
    provideNgxMask(),
    // provideEnvironmentNgxCurrency({
    //   inputMode: NgxCurrencyInputMode.Natural,
    // }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
