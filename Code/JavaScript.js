 $(document).ready(function(){


 	$.ajax({
 		url: 'https://api.spotify.com/v1/search',
 		method: 'GET',
 		contentType: "application/json; charset=UTF-8",
 		Authorization: 'BQAJ4LKIb234-X7GZJR_96qC-edTPzgFMqkoGM9TiIedPiCcU8iX_s3An9-KhmkdNzaMfvIm8BWRmOawqUnVjGfDfqDbHGqf30uDjwc0tUJ0S2_8F3ZysgOCysoRSYrbLamNiGoluCz2ON_6uQo',
 		data: {
 			q: 'christmas',
 			type: 'playlist'
 		},
 		success: function (response) {
            callback(response);
        }



 	});

 	var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};
searchAlbums('let go');
 	
 });