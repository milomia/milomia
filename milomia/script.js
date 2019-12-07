var gMapAPIKey = 'AIzaSyAPRqWiAQK5zQtbjYcHdOE9VgTdqXgeIvI';

var map;

function initMap()
{
  var houseLocation =  {lat: 51.72620, lng: 0.46619},

	map = new google.maps.Map(document.getElementById('hplus-map'), {
		'center': houseLocation,
		'zoom': 21,
		'mapTypeId' : google.maps.MapTypeId.HYBRID,
		'draggable': false,
		'scrollwheel': false
	});

	var popupContent = 'MiloMia Ltd<br>';
			popupContent += 'Highways<br>';
			popupContent += '118a Moulsham Street, Chelmsford';

	var infowindow = new google.maps.InfoWindow({
					content: popupContent
	});

	var marker = new google.maps.Marker({
		'position': houseLocation,
		'map': map,
		'title': 'Highways!'
	});

	marker.addListener('click', function() {
                 infowindow.open(map, marker);
         });

}
