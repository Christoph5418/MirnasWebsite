import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';




@Component({
  selector: 'app-private-parties-page',
  templateUrl: './private-parties-page.component.html',
  styleUrls: ['./private-parties-page.component.css']
})
export class PrivatePartiesPageComponent implements OnInit {


  ngOnInit(): void {
    AOS.init({
      offset: 300,
      duration: 1000
    });
  }


  }


