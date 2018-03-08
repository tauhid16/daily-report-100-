$(document).ready(function(){
	$('#nav').slicknav();



	$('.listing-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    navtext:["<i class='fas fa-angle-right'></i>","<i class=fas fa-angle-left></i>"],
    autoplay:false,
    margin:30,
    item:3
    }
})

	
});

