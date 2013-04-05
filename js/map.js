var map;

var points = [
[35.849, -86.362, 'Marker X', 'stop1'],
[35.846, -86.362, 'Marker Y', 'stop2'],
[35.852, -86.362, 'Marker Z', 'stop3'],
[35.852, -86.360, 'Marker A', 'stop4'],
[35.852, -86.355, 'Marker B', 'stop5'],
[35.852, -86.350, 'Marker C', 'stop6'],
[35.852, -86.347, 'Marker D', 'stop7'],
[35.849631, -86.368654, 'Kirksey Old Main', 'KOM1']
];

var jsonfile = jQuery.getJSON("landmarks.json");

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
=======
      var points = [
          [35.849, -86.362, 'Marker X', 'stop1'],
          [35.846, -86.362, 'Marker Y', 'stop2'],
          [35.852, -86.362, 'Marker Z', 'stop3'],
          [35.852, -86.360, 'Marker A', 'stop4'],
          [35.852, -86.355, 'Marker B', 'stop5'],
          [35.852, -86.350, 'Marker C', 'stop6'],
          [35.852, -86.347, 'Marker D', 'stop7']
        ];
        //need to add arraygen logic, possibly with JSON?

      function initialize() {
        console.log('initializing Google map');

        var myLatlng = new google.maps.LatLng(35.849057,-86.362374);

        var mapOptions = {
          zoom: 15,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          streetViewControl: false,
        }

        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

        google.maps.event.addListener(map, 'click', function(e) {openMapDrawer()})
>>>>>>> 9a978afb81a15fcc002403d54a6d01448f003429

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
<<<<<<< HEAD


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
=======
      }
>>>>>>> 9a978afb81a15fcc002403d54a6d01448f003429

      function attachPoints(marker, number) {
        var currentTourStop = points[number][3];
        google.maps.event.addListener(marker, 'click', function() {
          //goto point logic
<<<<<<< HEAD
          console.log('going to ' + currentTourStop);
          //window.location.assign('#' + currentTourStop);
          offset=-300;

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

=======
          alert(currentTourStop);
          //window.location.assign('#' + currentTourStop);
          $.smoothScroll({
            scrollTarget: '#' + currentTourStop
          });
        });
      };

      var mapDrawerState = 0;

>>>>>>> 9a978afb81a15fcc002403d54a6d01448f003429
      function toggleMapDrawer() {
        $('#mapDrawer').slideToggle(400);
      }; 

      function openMapDrawer() {
<<<<<<< HEAD
        $.smoothScroll({
          scrollTarget: '#mapDrawer'
        });
        $('#mapDrawer').toggleClass('open', 400);

      };

      function foldMapDrawer() {

        $('#mapDrawer.open').height(originalMapHeight);
      }

      function unfoldMapDrawer() {
        $('#mapDrawer').effect('size', {
          to: {height: $(window).height() },
          scale: 'box'
        }, 1000);
      }
=======
        $('#mapDrawer').toggleClass('open', 400);
      };
>>>>>>> 9a978afb81a15fcc002403d54a6d01448f003429
