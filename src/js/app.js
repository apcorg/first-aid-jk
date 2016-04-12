$(document).foundation();
// menu
$(function() {
	var pull 	= $('#pull');
		  menu 	= $('nav ul');
		  menuHeight	= menu.height();

	var w = $(window).width();
	if(w > 320 && menu.is(':hidden')) {
    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
    // auto close the mobile menu on tap
    $("nav ul li").click(function(event) {
      $(pull).click();
    });
  }
});

//svg in nav
$('.sandwich').click(function(e){
 $(this).toggleClass('boom');
})

//map hover
$("#outer .item img").hover(function() {
  $(this).parents('.item').find('figcaption').toggleClass("highlight");
});

//intro hover
$("#intro").hover(function() {
  console.log('hovered');
  $('#kit').parent().find('#kit').toggleClass("kit-highlight");
});


