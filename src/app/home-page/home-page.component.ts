import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],  
})
export class HomePageComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({
      offset: 300,
      duration: 1500
    });
  }

}
