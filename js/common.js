$(document).ready(function() {
 	//owl-slider
	 $("#owl-demo").owlCarousel({

	      navigation : true, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true

	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	});

	
	//isopot
	var $container = $('#container');

	// filter buttons
	$('#filters a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});

	$(function(){
		$container.isotope({
			itemSelector : '.element'
		});
	});
	
	$(".menu_button").click(function(){
		$(".main-menu ul").stop(false, true).slideToggle();	
	});
	
	//resize window
	function wResize(){
		$(".ready").css("height", $(window).height());
		$(".text").css("height", $(window).height());
	}
	wResize();
	$(window).resize(function(){
		wResize();	
	});
	
	$('.goToSection').click(function(e){
		e.preventDefault(); 
		var scroll_el = $(this).attr('href');	
		$('html, body').stop().animate({ 
			scrollTop: $(scroll_el).offset().top
		}, 500);
	});
	
	$('.portfolio_menu span a').on('click', function (e) {
		e.preventDefault();
		$('span a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
	});
	
	$("article").hover(function(){
		var change_el = $(this).attr('id');	
		$("nav").parent().removeAttr('class').addClass(change_el);
	});
	
	$(document).on("scroll", onScroll);
    
	//smoothscroll
	$('.main-menu ul li a').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('li a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
//			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});


function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('.main-menu a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('.main-menu ul li a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}