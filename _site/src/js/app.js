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



//set social icons size
  var myPic = $('.about');
  var mySocial = $('.my-social');
  var skillsList = $('.skills-list');
  var myStickers = $('.sticker');
  
  $(window).bind("load", function() {
    if ($(window).width() <= 736) {
      myStickerHeight =  (myPic.height() - skillsList.height()) / 2
    }
    else {
      myStickerHeight =  ((myPic.height() - mySocial.height()) / 2) + 8
    }
    myStickers.each(function(index, item){
      $(this).css("height", myStickerHeight);
    });
  });

//resize social icons on window resize
  $(window).resize(function () {
    if ($(window).width() <= 736) {
      myStickerHeight =  (myPic.height() - skillsList.height()) / 2
    }
    else {
      myStickerHeight =  ((myPic.height() - mySocial.height()) / 2) + 8
    }
    var myStickers = $('.sticker');
    myStickers.each(function(index, item){
      $(this).css("height", myStickerHeight);
    });
  });



