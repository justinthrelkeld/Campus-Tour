CampusTourApp = Ember.Application.create();

/*jQuery.getScript('js/test.js');*/

var points = jQuery.getJSON('js/landmarks.json');

function initialize() {
  console.log('initializing Google map');

  var defaultLatlng = new google.maps.LatLng(35.849057,-86.362374);
  var thisLatlng = defaultLatlng;

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
    var location = new google.maps.LatLng(points[i].lat,points[i].lng);
    var title = points[i].title;
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



function attachPoints(marker, number) {
  var currentTourStop = points[number]["id"];
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
};

CampusTourApp.Router.map(function() {
  // put your routes here
});

CampusTourApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return points;
  }
});