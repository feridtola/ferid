import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from '/Users/feridtola/Desktop/feridtola/src/app/home/home.component';
import { CandlestickComponent } from '/Users/feridtola/Desktop/feridtola/src/app/candlestick/candlestick.component';
import { BreakoutComponent } from '/Users/feridtola/Desktop/feridtola/src/app/breakout/breakout.component';
import { TechnicalComponent } from '/Users/feridtola/Desktop/feridtola/src/app/technical/technical.component';
import { FundamentalComponent } from '/Users/feridtola/Desktop/feridtola/src/app/fundamental/fundamental.component';
import { SwingComponent } from '/Users/feridtola/Desktop/feridtola/src/app/swing/swing.component';
import { ThinkComponent } from '/Users/feridtola/Desktop/feridtola/src/app/think/think.component';
import { CapmComponent } from '/Users/feridtola/Desktop/feridtola/src/app/capm/capm.component';
import { CathieComponent } from '/Users/feridtola/Desktop/feridtola/src/app/cathie/cathie.component';
import {ImprintComponent } from '/Users/feridtola/Desktop/feridtola/src/app/imprint/imprint.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'candlestick', component: CandlestickComponent },
  { path: 'breakout', component: BreakoutComponent },
  { path: 'swing', component: SwingComponent },
  { path: 'technical', component: TechnicalComponent },
  { path: 'fundamental', component: FundamentalComponent },
  { path: 'cathie', component: CathieComponent },
  { path: 'think', component: ThinkComponent },
  { path: 'capm', component: CapmComponent },  
  {path: 'imprint', component: ImprintComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],

})
export class AppRoutingModule { }
