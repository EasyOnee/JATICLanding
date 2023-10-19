import { Component, OnInit } from '@angular/core';

declare const $: any; // Declaración del acceso directo a jQuery

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  ngOnInit() {
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', () => {
      const navbar = $('.navbar');
      if (navbar && navbar.offset() && navbar.offset().top > 60) {
        $('.fixed-top').addClass('top-nav-collapse');
      } else {
        $('.fixed-top').removeClass('top-nav-collapse');
      }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
      $(document).on('click', 'a.page-scroll', (event: any) => {
        const $anchor = $(event.currentTarget);
        const target = $($anchor.attr('href'));
        if (target && target.offset()) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 600, 'easeInOutExpo');
          event.preventDefault();
        }
      });
    });

    // Closes the responsive menu on menu item click
    $(document).on('click', '.navbar-nav li a', (event: any) => {
      if (!$(event.currentTarget).parent().hasClass('dropdown')) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  }

}
