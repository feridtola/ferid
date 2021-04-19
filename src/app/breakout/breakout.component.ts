import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { trigger, state, transition, style, animate } from '@angular/animations';  
import {Router ,ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-breakout',
  templateUrl: './breakout.component.html',
  styleUrls: ['./breakout.component.css']
})
export class BreakoutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private _router: Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  navbarOpen = false;
//hide navbar on scroll
prevScrollpos = window.pageYOffset;
@HostListener('window:scroll', ['$event'])
onWindowScroll() {
var currentScrollPos = window.pageYOffset;
  if (this.prevScrollpos > currentScrollPos || this.prevScrollpos < 1) {
      window.document.getElementById('navbar')!.style.top = "0";
    } else if (this.prevScrollpos < currentScrollPos) {
      window.document.getElementById('navbar')!.style.top = "-50px";
    }
    this.prevScrollpos = currentScrollPos;
  } 
  
//open the navbar when cklicking the icon  
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

}





 


 

