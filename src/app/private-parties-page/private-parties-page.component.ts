import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { filter } from 'rxjs/operators';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-private-parties-page',
  templateUrl: './private-parties-page.component.html',
  styleUrls: ['./private-parties-page.component.css']
})
export class PrivatePartiesPageComponent implements OnInit {

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
      duration: 1000
    });
  }


  }


