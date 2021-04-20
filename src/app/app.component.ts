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

}
