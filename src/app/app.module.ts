import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, Component } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoadComponent } from './shered/components/spinner/load.component';
import { NotFoundComponent } from './shered/components/not-found/not-found.component';
import { LoginModule } from './pages/page-rede-social/login/login.module';
import { BytebankModule } from './pages/page-bytebank/bytebank.module';


registerLocaleData(localePt,'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    BytebankModule
  ],
  providers: [
    { provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
