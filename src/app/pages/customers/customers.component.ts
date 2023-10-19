import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  imageSlider!: Swiper;

  ngOnInit(): void {
    this.initImageSlider();
  }

  private initImageSlider(): void {
    this.imageSlider = new Swiper('.image-slider', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      loop: true,
      spaceBetween: 30,
      slidesPerView: 5,
      breakpoints: {
        580: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
  }
  
}
