import { Component, Renderer2, ElementRef} from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent{
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}


  toggleMenu() {
    const menuIcon = this.elementRef.nativeElement.querySelector('#menu-icon');
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');

    if (menuIcon && navbar) {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('open');
    }
  }


 
}
