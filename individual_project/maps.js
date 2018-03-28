
		    var map;
            var infowindow;
            var styles = [];
            var changed = false;
            for (var itemNo = 0; itemNo < placesList.length; itemNo++) {
            	$("#"+itemNo).click(function() {
	            	var curr = parseInt(this.id);
	            	showItemOnMap(curr)});
	          }
			function initMap()
			{
				changed = false;
			    map = new google.maps.Map(document.getElementById('map'),
				{
				    center: centerLatLong,
					zoom: zoomLevel,
					mapTypeId:google.maps.MapTypeId.ROADMAP
				});
			    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"}); 

			   map.mapTypes.set('map_style', styledMap);
			   map.setMapTypeId('map_style');
				
				for(var i=0;i<placesList.length;i++)
				{
				var shop=placesList[i];
				var latitude=shop.latitude;
				var longitude=shop.longitude;
				var title=shop.title;
				addMarker(latitude, longitude, title);
				}
				
				function addMarker(latitude, longitude, title){
				var position = {lat:latitude, lng:longitude};
				var marker= new google.maps.Marker({position: position, map: map});
				marker.setTitle(title);
				google.maps.event.addListener(marker, 'click', function(e){
				makeInfoWindow(this.position, this.title);
				var placeIndex = placesNames.indexOf(this.title);
				

				var topPos = document.getElementById(''+placeIndex).offsetTop;
  				document.getElementById('column1').scrollTop = topPos-10;
				});

				}
				
				function makeInfoWindow(position, msg){
				if(infowindow) infowindow.close();
				infowindow= new google.maps.InfoWindow({
				map: map,
				position: position,
				pixelOffset: new google.maps.Size(0,-40),
				content: '<div id="google-popup">'+
            '<p>'+msg+
            '<br /></p>'+
            '</div>'
				});
				}


				
				
				
			}



			function showItemOnMap(index)
			{
			    map = new google.maps.Map(document.getElementById('map'),
				{
				    center: {lat:placesList[index].latitude, lng:placesList[index].longitude},
					zoom: zoomLevel,
					mapTypeId:google.maps.MapTypeId.ROADMAP
				});
			    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"}); 

			   map.mapTypes.set('map_style', styledMap);
			   map.setMapTypeId('map_style');
				
				for(var i=0;i<placesList.length;i++)
				{
				var shop=placesList[i];
				var latitude=shop.latitude;
				var longitude=shop.longitude;
				var title=shop.title;
				addMarker(latitude, longitude, title);
				}
				
				function addMarker(latitude, longitude, title){
				var position = {lat:latitude, lng:longitude};
				var marker= new google.maps.Marker({position: position, map: map});
				marker.setTitle(title);
				google.maps.event.addListener(marker, 'click', function(e){
				makeInfoWindow(this.position, this.title);

				var placeIndex = placesNames.indexOf(this.title);
			

				var topPos = document.getElementById(''+placeIndex).offsetTop;
  				document.getElementById('column1').scrollTop = topPos-10;

				});
				}
				
				function makeInfoWindow(position, msg){
				if(infowindow) infowindow.close();
				infowindow= new google.maps.InfoWindow({
				map: map,
				position: position,
				pixelOffset: new google.maps.Size(0,-40),
				content: '<div id="google-popup">'+
            '<p>'+msg+
            '<br /></p>'+
            '</div>'
				});

				}
				
				makeInfoWindow({lat:placesList[index].latitude, lng:placesList[index].longitude}, placesList[index].title);
				
			}