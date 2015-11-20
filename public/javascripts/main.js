function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('SUID:' + profile.getEmail());
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

$(function() {
	console.log("hello there");
});
