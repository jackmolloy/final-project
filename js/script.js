// Jack js


var mapKey = config.MAP_KEY;
var twKey1 = config.ACCESS_TOKEN;
var twKey2 = config.ACCESS_TOKEN_SECRET;
var twKey3 = config.TWITTER_KEY;
var twKey4 = config.TWITTER_KEY_SECRET;
var data;
var name = [];
var address = [];
var result = [];
var map;
var infoWindow;
var service;
var shopLocations = [];
var reviewText = "";


// A $( document ).ready() block.
$( document ).ready(function() {
    insertKey();
    initMap();

});


// function loadPlaces(){
//
//   $.ajax({
//           type:"GET",
//           url:"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.8941264,-78.9133741&radius=500&type=restaurant&key=AIzaSyBdg1bcYkhdNsId5_5IoBoNX-vkZHs41KM",
//           dataType:"json",
//           success: parseData
// });
//
//
// }
//
// function parseData(data){
//     console.log(data);
//
//
//     // for (var i = 0, len = places.results.length; i < len; ++i) {
//     //   // name[i] = places.results[i].name;
//     //   name.push(places[i]["name"]);
//     //
//     // }
//
//     for (i = 0; i < data.length; i++) {
//       // address[i] = myJSONResult.results[i].formatted_address;
//       result.push(data[i]["result"]);
//     }
//
//     console.log(result);
//
//
// }

function insertKey() {
  var keyScript = "";
  keyScript = '<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=' + mapKey + '&libraries=places" type="text/javascript"></script>';
  document.getElementById("mapScript").innerHTML = keyScript;
}

// function twitterKey() {
//   var twitterScript = "";
//   twitterScript = '<?php $settings = array(' + '<br/>' + '"oauth_access_token" => " "' + twKey1 + '",' + '<br/>' + '"oauth_access_token_secret" => " "' + twKey2 + '",' + '<br/>' + '"consumer_key" => " "' + twKey3 + '",' + '<br/>' + '"consumer_secret" => " "' + twKey4 + '",' + '<br/>' + '); ?>';
//   document.getElementById("twitterKeys").innerHTML = twitterScript;
// }

// function twitter1() {
//   var twScript = "";
//   twScript = '"oauth_access_token" => " "' + twKey1 + '",';
//   document.getElementById("twitterKey1").innerHTML = twScript;
// }

function initMap() {
        var triangle = {lat: 35.913620, lng: -78.937204};
        var triangleMobile = {lat: 35.932342, lng: -78.881729};
        const mq = window.matchMedia( "(max-width: 768px)" );
        if (mq.matches) {
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: triangleMobile,
            disableDefaultUI: true,
            styles: [
              {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#746855'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.icon',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
              }
            ]
          });
        } else {
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: triangle,
            mapTypeControl: false,
            styles: [
              {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#746855'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.icon',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ "visibility": "off" }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
              }
            ]
          });
        }


        // var marker = new google.maps.Marker({
        //   position: triangle,
        //   map: map
        // });

        var request = {
          location: triangle,
          radius: 30,
          types: ['restaurant']
        }



        infoWindow = new google.maps.InfoWindow();
        service = new google.maps.places.PlacesService(map);

        map.addListener('idle', performSearch);


        // polyline found at: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
        var triangleCoordinates = [
          {lat: 35.779590, lng: -78.638179},
          {lat: 35.913200, lng: -79.055845},
          {lat: 35.994033, lng: -78.898619},
          {lat: 35.779590, lng: -78.638179},
        ];

        var trianglePath = new google.maps.Polyline({
          path: triangleCoordinates,
          geodesic: true,
          strokeColor: '#FFF',
          strokeOpacity: 0.65,
          strokeWeight: 1
        });

        trianglePath.setMap(map);

      }

      function performSearch() {
        var request = {
          bounds: map.getBounds(),
          keyword: 'coffee shop'
        };
        service.nearbySearch(request, callback);
      }

      // google.maps.event.addDomListener(window, 'load', initMap);


      function callback(results, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        for (var i = 0; i < results.length; i++){
          // var result = [];
          // result = results[i];
          createMarker(results[i]);
          shopLocations.push(geoData(results[i]));
          // console.log(result.geometry.location.lat);
          }
        }


        function geoData(result) {
          var coordinates = [];
          var lat = result.id;
          var long = result.id;
          coordinates = [lat, long];
          console.log(coordinates[0], coordinates[1]);
          return coordinates;

        }

        console.log(shopLocations);


        function createMarker(place) {
          var marker2 = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: {
              url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
              anchor: new google.maps.Point(10, 10),
              scaledSize: new google.maps.Size(10, 17)
            }
          })

          google.maps.event.addListener(marker2, 'click', function() {
            service.getDetails(place, function(result, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.error(status);
                return;
              }


             for (var i = 0; i < 3; i++){
             var reviewText = '<p class="sub-head3">' + result.reviews[i]['author_name'] + ' | ' + '<img src="https://www.newtimesslo.com/images/ratings/one-star-small.gif">' + result.reviews[i]['rating'] + '</p>' + '<p class="quote">' + '"' + result.reviews[i]['text'] + '"' + '</p>';
             }

              // var contentString = '<h2 class="window-head">' + result.name + '</h2>' + '<div class="rating-box scrollable-content">' + '<p class="sub-head">Average Rating: ' + '<img src="https://www.newtimesslo.com/images/ratings/one-star-small.gif">' + result.rating + '</p>' + '<p class="sub-head">Website: ' + result.website + '</p>' + '</br' + '<p class="sub-head">Phone: ' + result.formatted_phone_number + '</p>'
              // + '</br>' + '<p class="sub-head">Address: ' + result.formatted_address + '</p>' + '</br>' + '<p class="sub-head2"> Most Helpful Review</p>' + '</br>' + '<p class="quote">' + reviewText + '</p>' + '</div>';

              var contentString = '<h2 class="window-head">' + result.name + '</h2>' + '<div class="rating-box scrollable-content">' + '<p class="sub-head">Average Rating: ' + '<img src="https://www.newtimesslo.com/images/ratings/one-star-small.gif">' + result.rating + '</p>' + '<p class="sub-head">' + result.formatted_phone_number + '</p>' + '<p class="sub-head"><a href="' + result.website + '">' + result.website + '</a></p>'
              + '<p class="sub-head">' + result.formatted_address + '</p>' + '<p class="sub-head2"> Most Helpful Review</p>' + reviewText + '</div>';


              var infoWindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 200
              });

              // infoWindow.setContent(content);
              // infoWindow.setContent(result.reviews[0]['rating']);
              infoWindow.open(map, marker2);
            });
          });

        }


// <script type="text/javascript" src="https://twitter.com/search?vertical=default&q=coffee%20shop%20coffee%20OR%20cafe&geocode=35.8941264,-78.9133741,30mi&src=typd" type="text/javascript"></script>
