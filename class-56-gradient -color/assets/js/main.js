$(document).ready(function(){
	$('#nav').slicknav();
     
    $("theme-1-select").on('click',function(){
          $("body").addclass("theme-1").removclass ("theme-2");
       return false;



      });
     $("theme-2-select").on('click',function(){
          $("body").addclass("theme-2") .removclass ("theme-2");
          return false;
          
      });




        

	
	
});