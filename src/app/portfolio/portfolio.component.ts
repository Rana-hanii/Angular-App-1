import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  ImageSrc: string = '';
  displayLightbox: boolean = false;
  openLightbox(imageSrc: string) {
    this.displayLightbox = true;
    console.log('open lightbox');
    this.ImageSrc = imageSrc;
 
  }
  closeLightbox() {
    this.displayLightbox = false;
    console.log('close lightbox');
  }
}


