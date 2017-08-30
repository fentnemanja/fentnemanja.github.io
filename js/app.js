
$(document).ready(function () {
  new WOW().init();
  jQuery(document).ready(function(){
    jQuery('#slippry-demo').slippry()
  });

  $('.burger').click(function() {
      $('nav').stop().slideToggle('medium');
      $('.flags').stop().slideToggle('medium');
      return $(this).toggleClass('open');
  });
  
});
