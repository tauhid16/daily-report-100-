$(document).ready(function(){
    $('.map')
      .gmap3({
        center:[40.740, -74.18],
        zoom: 12
      })
      .groundoverlay(
        "http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
        {north: 40.773941, south: 40.712216, east: -74.12544, west: -74.22655}
      );

	

	
});