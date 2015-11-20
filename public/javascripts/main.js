function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  if (profile) {
	  $("#loading-text").hide();
	  $("#not-signed-in").hide();
	  $("#signed-in .header").text("Signed in as " + profile.getEmail());
	  $("#signed-in").show();
  }
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    $("#loading-text").hide();
  	$("#not-signed-in").show();
  	$("#signed-in").hide();
  });
}

function onFailure(error) {
  console.log(error);
}

function getLocation() {
	$("#class-sign-in").toggleClass("disabled");
	$("#class-sign-in").text("getting position...");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
    $("#class-sign-in").toggleClass("disabled");
  }
}

function rad(x) {
  return x * Math.PI / 180;
}

function getDist(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  // return d; // returns the distance in meter
  return d * 3.2808; // returns the distance in feet
}

var userPos;

var classPos = {
	lat: 37.428134,
	lng: -122.174327
};

function showPosition(position) {
	$("#class-sign-in").toggleClass("disabled");
	$("#class-sign-in").text("Sign me into class");
	userPos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	};
  console.log(userPos);
  var dist = ~~getDist(userPos,classPos);
  $("#message").text("You are " + dist + " feet from class.");
}

$(function() {
});