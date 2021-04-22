import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component } from '@angular/core';

//Imports für Google Analytics
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
//End Imports Google Analytics

//variable Function google analytics
declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'feridtola';

  //begin google analytics
  constructor(
    
    private router: Router,
    //Lazy Loading ViewContainRef & ComponentFactoryResolver
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
    
    ) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      /** START : Code to Track Page View  */
       gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
       })
      /** END */
    })
  }

  //ende google analytics


  //Lazy Loading
  async getLazyPhotos() {
    this.viewContainerRef.clear();
    const { HomeComponent } = await import('./home/home.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(HomeComponent)
    );
  }

  async getLazybreakout() {
    this.viewContainerRef.clear();
    const { BreakoutComponent } = await import('./breakout/breakout.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(BreakoutComponent)
    );
  }

  async getLazyCandlestick() {
    this.viewContainerRef.clear();
    const { CandlestickComponent } = await import('./candlestick/candlestick.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(CandlestickComponent)
    );
  }

  async getLazyCapm() {
    this.viewContainerRef.clear();
    const { CapmComponent } = await import('./capm/capm.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(CapmComponent)
    );
  }

  async getLazyCathie() {
    this.viewContainerRef.clear();
    const { CathieComponent } = await import('./cathie/cathie.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(CathieComponent)
    );
  }

  async getLazyFundamental() {
    this.viewContainerRef.clear();
    const { FundamentalComponent } = await import('./fundamental/fundamental.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(FundamentalComponent)
    );
  }

  async getLazySwing() {
    this.viewContainerRef.clear();
    const { SwingComponent } = await import('./swing/swing.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(SwingComponent)
    );
  }

  async getLazyTechnical() {
    this.viewContainerRef.clear();
    const { TechnicalComponent } = await import('./technical/technical.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(TechnicalComponent)
    );
  }

  async getLazyThink() {
    this.viewContainerRef.clear();
    const { ThinkComponent } = await import('./think/think.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ThinkComponent)
    );
  }
}
