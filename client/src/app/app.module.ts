import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { TransactionModule } from './transaction/transaction.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LayoutModule } from './layout/layout.module';
import { NotFoundModule } from './not-found/not-found.module';
import { CategoryModule } from './category/category.module';
import { StatsModule } from './stats/stats.module';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    TransactionModule,
    HttpClientModule,
    LayoutModule,
    NotFoundModule,
    CategoryModule,
    StatsModule,
    AccountModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line prettier/prettier
export class AppModule {}
