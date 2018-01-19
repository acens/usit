// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
// require active_admin/base
//= require jquery
//= require bootstrap.min
//= require jquery.parallax
//= require owl.carousel.min
//= require owl.animate.js
//= require owl.autoplay
//= require owl.autoheight.js
//= require owl.hash.js
//= require owl.lazyload.js
//= require owl.navigation.js
//= require smoothscroll
//= require wow.min
//= require custom
//= require bootstrap-notify.min
//= require jquery.magnific-popup.min
//= require magnific-popup-options
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  	$('select').css('color','#ffffff');
    $('select').change(function() {
       var current = $('#select').val();
      $('select').css('color','#ffffff');
    });

    $("#owl-images").owlCarousel({
      items:1,
      margin: 10,
      loop:true,
      autoplay:true,
      autoplayTimeout: 2000,
      autoplayHoverPause:true
    });

    $("#owl-testimonials").owlCarousel({
      items:1,
      margin: 10,
      loop:true,
      autoplay:true,
      autoplayTimeout: 2500,
      autoplayHoverPause:true
    });

});
