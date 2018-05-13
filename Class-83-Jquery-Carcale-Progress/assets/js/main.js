$(document).ready(function(){
	  $('#circle').circleProgress({
    value: 0.75,
    size: 80,
   thickness:2,
   emptyFill:'#fff',
    fill: {
      gradient: ["red", "blue"]
    }
  });
	  $('#circle-2').circleProgress({
    value: 0.75,
    size: 80,
   thickness:2,
   emptyFill:'#fff',
    fill: {
      gradient: ["yellow", "green"]
    }
  });
	  $('#circle-3').circleProgress({
    value: 0.75,
    size: 80,
   thickness:2,
   emptyFill:'#fff',
    fill: {
      gradient: ["red", "orange"]
    }
  });






	
});