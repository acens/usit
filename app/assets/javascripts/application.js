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
//= require active_admin/base
//= require jquery
//= require bootstrap.min
//= require jquery.parallax
//= require owl.carousel.min
//= require smoothscroll
//= require wow.min
//= require custom
//= require bootstrap-notify.min
//= require turbolinks
//= require_tree .

[20:24, 5/1/2018] Gleidson: $(document).ready(function() {
  	$('select').css('color','#ffffff');
    $('select').change(function() {
       var current = $('#select').val();
      $('select').css('color','#ffffff');

    });
});
