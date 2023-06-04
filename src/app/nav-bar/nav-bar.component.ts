import { Component, Renderer2, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit{

  ngOnInit(): void {
      
  }
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private router: Router) {}


  toggleMenu() {
    const menuIcon = this.elementRef.nativeElement.querySelector('#menu-icon');
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');

    if (menuIcon && navbar) {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('open');
    }
  }

  scrollToTargetSection() {
    const targetElement = document.getElementById('target-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateAndScroll() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToTargetSection();
      }, 100);
    });
  }

}

 

