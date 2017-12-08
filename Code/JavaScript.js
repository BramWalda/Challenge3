 $(document).ready(function(){
 	
<<<<<<< HEAD
 		
 });

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
	// 2. This code loads the IFrame Player API code asynchronously.
 	var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsById('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
>>>>>>> origin/master
=======
 	
 		console.log('hi');
>>>>>>> 008d3393193ed146c7df3ab667fdb49e3b72293e

 	$.ajax({
 		url: 'https://api.spotify.com/v1/search',
 		method: 'GET',
 		contentType: "application/json",
 		Authorization: 'Bearer BQAJ4LKIb234-X7GZJR_96qC-edTPzgFMqkoGM9TiIedPiCcU8iX_s3An9-KhmkdNzaMfvIm8BWRmOawqUnVjGfDfqDbHGqf30uDjwc0tUJ0S2_8F3ZysgOCysoRSYrbLamNiGoluCz2ON_6uQo',
 		data: {
 			q: 'christmas',
 			type: 'playlist',
 			limit: 5
 		},
 		success: displayResults
    });
 	
function displayResults(response_body){
	console.log(response_body);
}

 });
<<<<<<< HEAD
>>>>>>> 37cc02a2a0b72d43f42b8f32d5704860da3f7856



=======
>>>>>>> 008d3393193ed146c7df3ab667fdb49e3b72293e

