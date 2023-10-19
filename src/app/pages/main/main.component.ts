import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
    /* Preloader */
    window.addEventListener('load', () => {
      const preloaderFadeOutTime: number = 500;
      const preloader: HTMLElement = document.querySelector('.spinner-wrapper')!;
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, preloaderFadeOutTime);
      }, 500);
    });
  }

}
