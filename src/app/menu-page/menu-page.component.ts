import { Component, Renderer2, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import {lunchMenu, dinnerMenu, dinnerSpecialsMenu, desertMenu} from "../foods"

interface men{
    item: string;
    price: string;
    description: string;
    pic: string;
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
  desertMenu = desertMenu;




  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
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
      for(let i = 0; i < this.lunchMenu.length; i++)
      {
        tempMenu[i * 2] = this.lunchMenu[i];
      }
 
      for(let i = (this.lunchMenu.length / 2); i < this.lunchMenu.length; i++)
      {
         tempMenu[i * 2 + 1] = this.lunchMenu[i];
      }
      this.lunchMenu = tempMenu;


      tempMenu = [];

      for(let i = 0; i < this.dinnerMenu.length; i++){
        tempMenu[i * 2] = this.dinnerMenu[i];
      }
 
      for(let i = (this.dinnerMenu.length / 2); i < this.dinnerMenu.length; i++){
         tempMenu[i * 2 + 1] = this.dinnerMenu[i];
      }
       this.dinnerMenu = tempMenu;

      tempMenu = [];

      for(let i = 0; i < this.dinnerSpecialsMenu.length; i++){
        tempMenu[i * 2] = this.dinnerSpecialsMenu[i];
      }
 
      for(let i = (this.dinnerSpecialsMenu.length / 2); i < this.dinnerSpecialsMenu.length; i++){
         tempMenu[i * 2 + 1] = this.dinnerSpecialsMenu[i];
      }

      this.dinnerSpecialsMenu = tempMenu;
       
       tempMenu = [];

       for(let i = 0; i < this.desertMenu.length; i++){
         tempMenu[i * 2] = this.desertMenu[i];
       }
  
       for(let i = (this.desertMenu.length / 2); i < this.desertMenu.length; i++){
          tempMenu[i * 2 + 1] = this.desertMenu[i];
       }
        this.desertMenu = tempMenu;




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
   this.name = "Desert";
  }

 

            
    
  
  

}
