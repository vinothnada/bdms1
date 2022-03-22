
	/*GOOGLE MAPS CONFIGURATION*/

	/* Your location */
    var locations = [
      ['90 Dream Avenue, New York <span>Come here if you want!</span>'
	  , -33.950198, 151.259302, 1]
    ];

	/* Map initialize */
    var map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
	  panControl: false,
	  zoomControl: true,
	  scaleControl: false,
	  mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }