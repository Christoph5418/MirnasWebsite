import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {Router, NavigationEnd} from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit{


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

}
