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

$(function() {
});