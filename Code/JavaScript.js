 $(document).ready(function(){
 	
 	
 		console.log('hi');

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

