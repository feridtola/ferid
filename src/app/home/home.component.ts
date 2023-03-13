import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { trigger, state, transition, style, animate } from '@angular/animations';  

import {Router ,ActivatedRoute } from '@angular/router';
import { CandlestickComponent } from '../candlestick/candlestick.component';
import { element } from 'protractor';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import Typed from 'typed.js';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) document,
    private _router: Router,
    private _activatedRoute:ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
     // Typed headline
     var options = {
      strings: ['', ' Information Technologie Consultant from Munich.'],
      backDelay: 0,
      backSpeed: 0,
      typeSpeed: 70,
      showCursor: false,
    };
  var typed =  new Typed('.typed', options);
  }
  
  //hide navbar on scroll
  navbarOpen = false;
  prevScrollpos = window.pageYOffset;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
  var currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos || this.prevScrollpos < 1) {
        window.document.getElementById('navbar')!.style.top = "0";
      } else if (this.prevScrollpos < currentScrollPos  ) {
        window.document.getElementById('navbar')!.style.top = "-50px";
      }
      this.prevScrollpos = currentScrollPos;
    }  
  //open navbar  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  //Close navbar after cklicing the link
  NavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}

  candlestick() {
    this._router.navigateByUrl('/candlestick');
  }

  breakout() {
    this._router.navigateByUrl('/breakout');
  }
  swing() {
    this._router.navigateByUrl('/swing');
  }
  technical() {
    this._router.navigateByUrl('/technical');
  }
  fundamental() {
    this._router.navigateByUrl('/fundamental');
  }
  cathie() {
    this._router.navigateByUrl('/cathie');
  }
  think() {
    this._router.navigateByUrl('/think');
  }
  capm() {
    this._router.navigateByUrl('/capm');
  }

}
