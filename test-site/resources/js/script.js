$(document).ready(function () {

    /* for the sticky natvigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }  
    }, {
        offset: '60px'
    });  

    /* scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate( {
            scrollTop: $('.js--section-plans').offset().top},1000
        ); 
    });   
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate( {
            scrollTop: $('.js--section-features').offset().top},500
        ); 
    });
    
    /* natvigation scroll */  
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animation on scoll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile Navi */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round')            
        }        
    });
    
    var map = new GMaps({
      div: '.map',
      lat: -12.043333,
      lng: -76.950333,
      zoom: 12
    });

    map.addMarker({
      lat: -12.043333,
      lng: -77.028333,
      title: 'Lima',
      infoWindow: {
        content: '<p>HTML Content</p>'
      }    
    });    



});