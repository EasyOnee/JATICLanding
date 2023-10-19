import { Component, OnInit } from '@angular/core';

declare const $: any; // Declaración del acceso directo a jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    const amountScrolled = 700;
    $(window).scroll(() => {
      if (window.scrollY > amountScrolled) {
        $('a.back-to-top').fadeIn(500);
      } else {
        $('a.back-to-top').fadeOut(500);
      }
    });

    // Removes Long Focus On Buttons
    $('.button, a, button').mouseup(() => {
      $(this).blur();
    });
  }

}
