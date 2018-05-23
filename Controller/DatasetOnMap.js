class DatasetOnMap
{
	constructor(){
		
	}
	dataMap(lat,lon,dataset_name,label)
	{
			map = L.map(label,{ center: [lat, lon], zoom: 13});

				// Add Tile Layer basemap
				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
				  maxZoom: 18,
				  id: 'mapbox.streets',
				accessToken: 'pk.eyJ1Ijoicml0ZW5jaGhhdHJhbGEyIiwiYSI6ImNqZ2ptcWcwcTExYWkycHJ6eno5YWxoZWYifQ.RQUOzI7IAnMmkN29kSbQWQ'
				}).addTo(map);
			//}
			// Declare Variables
			// variable to hold coffee shop locations
			var coffeeShopLocations = null;
			// variable to hold your location
			var youAreHere = null;

			// Database Queries
			// Get all coffee cafes from dataset
			var sqlQuery = "SELECT * FROM "+dataset_name;

			// Set CartoDB Username
			var cartoDBUserName = "ritenchhatrala2";

			// Get CartoDB selection as GeoJSON and Add to Map
			
			//showAll();
		    if(map.hasLayer(coffeeShopLocations)){
				map.removeLayer(coffeeShopLocations);
			  };
			  map.setView(new L.LatLng(lat, lon), 12);
			  $.getJSON("https://"+cartoDBUserName+".cartodb.com/api/v2/sql?format=GeoJSON&q="+sqlQuery, function(data) {
				coffeeShopLocations = L.geoJson(data,{
				  onEachFeature: function (feature, layer) {
					layer.bindPopup('<p><b>' + feature.properties.project_name + '</b></p>');
					layer.cartodb_id=feature.properties.cartodb_id;
				  }
				}).addTo(map);
			  });
			// Find five closest coffee shops

			// Set Global Variable that will hold your location
			var myLocation = null;

			// Set Global Variable that will hold the marker that goes at our location when found
			var locationMarker = null;

			// Set 'Your Location' icon
			var redIcon = L.icon({
			  iconUrl: 'images/redIcon.png',
			  shadowUrl: 'images/marker-shadow.png',
			  iconAnchor: [13, 41]  
			});

			// Listen for a click event on the Map element
			map.on('click', locationFound);

			// Function that will run when the location of the user is found
			function locationFound(e){
			  myLocation = e.latlng;
			  closestCoffee();
			  locationMarker = L.marker(e.latlng, {icon: redIcon});
			  map.addLayer(locationMarker);
			};

			// Function that will run if the location of the user is not found
			function locationNotFound(e){
			  alert(e.message);
			};

			// Function will find and load the five nearest coffee shops to a user location
			function closestCoffee(){
			  // Set SQL Query that will return five closest coffee shops
			  var sqlQueryClosest = "SELECT * FROM "+dataset_name+" ORDER BY the_geom <-> ST_SetSRID(ST_MakePoint("+myLocation.lng+","+myLocation.lat+"), 4326) LIMIT 5";

			  // remove CoffeeShopLocations if on map
			  if(map.hasLayer(coffeeShopLocations)){
				map.removeLayer(coffeeShopLocations);
			  };

			  // remove locationMarker if on map
			  if(map.hasLayer(locationMarker)){
				map.removeLayer(locationMarker);
			  };

			  // Get GeoJSON of five closest points to the user
			  $.getJSON("https://"+cartoDBUserName+".carto.com/api/v2/sql?format=GeoJSON&q="+sqlQueryClosest, function(data) {
				coffeeShopLocations = L.geoJson(data,{
				  onEachFeature: function (feature, layer) {
					layer.bindPopup('<p><b>' + feature.properties.name + '</b><br /><em>' + feature.properties.address + '</em></p>');
					layer.cartodb_id=feature.properties.cartodb_id;
				  }
				}).addTo(map);
			  });
			};
	}
	/*showAll(){

			};*/
}
