import { Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { Interface } from 'node:readline';

interface IImage{
  imgSrc:string

}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images:IImage[]=[
    {imgSrc:'../assets/img/portfolio/cabin.png'},
    {imgSrc:'../assets/img/portfolio/cake.png'},
    {imgSrc:'../assets/img/portfolio/circus.png'},
    {imgSrc:'../assets/img/portfolio/game.png'},
    {imgSrc:'../assets/img/portfolio/safe.png'},
    {imgSrc:'../assets/img/portfolio/submarine.png'},

  ];

  

  
  
  @ViewChildren('imgs') imgs!:QueryList<ElementRef>

  isModalOpen: boolean = false;
  selectedImage:any =''
  currentIndex: number = 0;

  


  showModel(image: IImage): void {
    if (this.isModalOpen === false) {
      this.currentIndex = this.images.findIndex(img => img.imgSrc === image.imgSrc);
      this.isModalOpen = true;
      this.selectedImage = image.imgSrc; 
    }
  }

  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
    this.selectedImage = this.images[this.currentIndex].imgSrc;
  }


  previousImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; 
    }
    this.selectedImage = this.images[this.currentIndex].imgSrc;
  }
  
  

  closeModel():void{
    this.isModalOpen = false;

  }

}



