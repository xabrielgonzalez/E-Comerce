function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}

/*  function onSignIn(){
	const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
	var profile = googleUser.getBasicProfile();
	localStorage.setItem('ID:' , profile.getId()); // Do not send to your backend! Use an ID token instead.
	localStorage.setItem('Name:' , profile.getName());
	localStorage.setItem('Image URL:' , profile.getImageUrl());
	localStorage.setItem('Email:' , profile.getEmail()); // This is null if the 'email' scope is not present.
  
	localStorage.setItem("Acceso", "Ok");
	
  
	var id_token = googleUser.getAuthResponse().id_token;
	console.log("ID Token: " + id_token);
	localStorage.setItem("usuario", profile.getName());
	location.href = "home.html";

  
  }  */
