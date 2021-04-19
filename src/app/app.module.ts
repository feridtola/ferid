import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandlestickComponent } from './candlestick/candlestick.component';
import { HomeComponent } from './home/home.component';
import { BreakoutComponent } from './breakout/breakout.component';
import { SwingComponent } from './swing/swing.component';
import { TechnicalComponent } from './technical/technical.component';
import { FundamentalComponent } from './fundamental/fundamental.component';
import { CathieComponent } from './cathie/cathie.component';
import { ThinkComponent } from './think/think.component';
import { CapmComponent } from './capm/capm.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    CandlestickComponent,
    HomeComponent,
    BreakoutComponent,
    SwingComponent,
    TechnicalComponent,
    FundamentalComponent,
    CathieComponent,
    ThinkComponent,
    CapmComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
