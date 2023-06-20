import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';


import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],  
})
export class HomePageComponent implements OnInit {


  constructor(private router: Router) {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });

  }

  ngOnInit(): void {
    AOS.init({
      offset: 300,
      duration: 1500
    });
  }

  scrollToMenuSection() {
    const targetElement = document.getElementById('target-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateAndScroll() {
    console.log('f')
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToMenuSection();
      }, 100);
    });
  }

  test(){
    console.log('hi')
  }



}
