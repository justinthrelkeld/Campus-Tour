CampusTourApp = Ember.Application.create();

var points = jQuery.getJSON("landmarks.json");

CampusTourApp.Router.map(function() {
  // put your routes here
});

CampusTourApp.IndexRoute = Ember.Route.extend({
  model: function() {
    return points;
  }
});