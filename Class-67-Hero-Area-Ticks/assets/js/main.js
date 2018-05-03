$(document).ready(function(){
	$('#nav').slicknav();



	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".stick-area").addClass("is-stick");
    }
}); 

	
});