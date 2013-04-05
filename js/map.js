//branch: json
var map;

var points = /*jQuery.getJSON("landmarks.json");*/

{"KOM1": {
  "lat": 35.849631,
  "lng": -86.368654,
  "title": "Kirksey Old Main",
  "media": {
    "type": "image",
    "src": "kom1.jpg"
  }
},
"stop1": {
  "lat": 35.849,
  "lng": -86.362,
  "title": "Stop 1",
  "media": {
    "type": "image",
    "src": "kom1.jpg"
  }
},
"stop2": {
  "lat": 35.846,
  "lng": -86.362,
  "title": "Stop 2",
  "media": {
    "type": "image",
    "src": "kom1.jpg"
  }
},
"stop3": {
  "lat": 35.852,
  "lng": -86.362,
  "title": "Stop 3"
}
}};

alert(points.landmarks.KOM1.lat);

function initialize() {
  console.log('initializing Google map');

  var defaultLatlng = new google.maps.LatLng(35.849057,-86.362374);
  var thisLatlng = defaultLatlng;
  
//          function getLocation()
//          {
//            if (navigator.geolocation)
//            {
//              navigator.geolocation.getCurrentPosition(userPosition,showError);
//            }
//            else{console.log("Geolocation is not supported by this browser.");}
//          }
//
//          function userPosition(position)
//          {
//            var userLatlng=position.coords.latitude+","+position.coords.longitude;
//            thisLatlng=userLatlng;
//          }
//
//          function showError(error)
//         {
//            switch(error.code) 
//            {
//              case error.PERMISSION_DENIED:
//              console.log("User denied the request for Geolocation.")
//              break;
//              case error.POSITION_UNAVAILABLE:
//              console.log("Location information is unavailable.")
//              break;
//              case error.TIMEOUT:
//              console.log("The request to get user location timed out.")
//              break;
//              case error.UNKNOWN_ERROR:
//              console.log("An unknown error occurred.")
//              break;
//            }
//          }
//          getLocation();

var mapOptions = {
  zoom: 15,
  center: thisLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControl: false,
  streetViewControl: false,
}

map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

google.maps.event.addListener(map, 'click', function(e) {
  openMapDrawer();
  map.panTo(thisLatlng);
  map.setZoom(15);
})

        // Add markers to the map from array points.
        for (var i = 0; i < points.length; i++) {
          var location = new google.maps.LatLng(points[i][0],points[i][1]);
          var title = points[i][2];
          var marker = new google.maps.Marker({
            position: location,
            title: title,
            map: map
          });
          attachPoints(marker, i);
        }

        $('#mapDrawer').waypoint(function() {
          console.log('Top collided');
        }, {offset: 1});

        $('#mapDrawer').waypoint(function() {
          console.log('bottom collided');
        }, { 
          offset: function() {
            return -$(this).height();
          }});

        originalMapHeight = $('#mapDrawer').height(); 

        $('.nav').on('click', function() {
          $.smoothScroll({
            scrollTarget: '#top'
          });
          return false;
        });
        $('').waypoint(function(direction) {
          alert('Top of thing hit top of viewport.' + direction);
        });

      };

      function attachPoints(marker, number) {
        var currentTourStop = points[number][3];
        google.maps.event.addListener(marker, 'click', function() {
          //goto point logic
          console.log('going to ' + currentTourStop);
          //window.location.assign('#' + currentTourStop);
          if ($('#mapDrawer').hasClass('open')) 
            {offset=-300} 
          else
            {offset=-15}

          $.smoothScroll({
            scrollTarget: '#' + currentTourStop,
            offset: offset,
          });
          $('#mapDrawer').removeClass('open', 400);
        });
      };
          //window.location.assign('#' + currentTourStop);
          $.smoothScroll({
            scrollTarget: '#' + currentTourStop
          });


          function openMapDrawer() {
            $.smoothScroll({
              scrollTarget: '#mapDrawer'
            });
            $('#mapDrawer').toggleClass('open', 400);

          };