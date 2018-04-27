jQuery(document).ready(function($){
    $(".all-portfolios").isotope();
   
    
    $(".filter li").on('click',function(){ 
        
      $(".filter li").removeClass("active");
      $(this).addClass("active");        

        var selector = $(this).attr('data-filter'); 
        $(".all-portfolios").isotope({ 
            filter: selector, 
            
        }); 
      return false; 
    }); 
    
});