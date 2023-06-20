import { Component, Renderer2, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import {lunchMenu, dinnerMenu, dinnerSpecialsMenu, desertMenu} from "../foods";
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';


interface men{
    item: string;
    price: string;
    description: string;
    pic: string;
    type: string;
}

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit, AfterViewInit{
  
  windowWidth!: number;
  lunchMenu = lunchMenu;
  dinnerMenu = dinnerMenu;
  dinnerSpecialsMenu = dinnerSpecialsMenu;




  constructor(private renderer: Renderer2, private elementRef: ElementRef, private router: Router) {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });
    
  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.getWindowWidth();

  }

  ngAfterViewInit(): void {
     this.lunchClick();
  }

  getWindowWidth(){
    let tempMenu: men[] = [];

    if (this.windowWidth < 1090) {
      for(let i = 0; i < this.lunchMenu.length / 2; i++)
      {
        tempMenu[i * 2] = this.lunchMenu[i];
      }
      let x: number = 0;
      for(let i = Math.ceil((this.lunchMenu.length / 2)); i < this.lunchMenu.length; i++)
      {
         tempMenu[x * 2 + 1] = this.lunchMenu[i];
         x++;
      }
      this.lunchMenu = tempMenu;


      tempMenu = [];
      x = 0

      for(let i = 0; i < this.dinnerMenu.length / 2; i++){

        tempMenu[i * 2] = this.dinnerMenu[i];
      }
 
      for(let i = Math.ceil((this.dinnerMenu.length / 2)); i < this.dinnerMenu.length; i++){
         tempMenu[x * 2 + 1] = this.dinnerMenu[i];
         x++;
      }
       this.dinnerMenu = tempMenu;

      tempMenu = [];
      x = 0;

      for(let i = 0; i < this.dinnerSpecialsMenu.length / 2; i++){
        tempMenu[i * 2] = this.dinnerSpecialsMenu[i];
      }
 
      for(let i = Math.ceil((this.dinnerSpecialsMenu.length / 2)); i < this.dinnerSpecialsMenu.length; i++){
         tempMenu[x * 2 + 1] = this.dinnerSpecialsMenu[i];
         x++;
      }

      this.dinnerSpecialsMenu = tempMenu;
    } 
  }


  activeMenu = this.lunchMenu;
  name = "Lunch";

  toggleArrow(): void{

    const dropDown = this.elementRef.nativeElement.querySelector('.dropdown');
    dropDown.classList.toggle('active');

  }

  lunchClick(){
    this.activeMenu = this.lunchMenu;
    this.name = "Lunch";
    
  }

  dinnerClick(){
    this.activeMenu = this.dinnerMenu;
    this.name = "Dinner";
  }

  dinnerSpecialsClick(){
    this.activeMenu = this.dinnerSpecialsMenu;
    this.name = "Specials";

   }

  desertClick(){
   this.activeMenu = desertMenu; //cannot understand why phone acts weird when it's this.desertMenu
   this.name = "Deserts";
  }

 

            
    
  
  

}
