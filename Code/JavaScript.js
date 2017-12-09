 $(document).ready(function(){
 
 	// Michal

 	// SPOTIFY
	var offset = 0;

	function showURLs(response){
		//console.log(response)
		var col = $(document.createElement('div'));
		col.attr('class','col-6');
		response.playlists.items.forEach(function(item){
			var row = $(document.createElement('div'));
			row.attr('class','row');
			var image = $(document.createElement('img'));
			image.attr('src',item.images[0].url);
			image.attr('alt','playlist image')
			image.attr('height',50);
			image.appendTo(row);
			row.append('<span><a href = "#APIs" data-playlist-uri="' + item.uri + '"">' + item.name + '</a></span>');
			row.appendTo(col);
		});
		col.appendTo('.playlists');
		var col_2 = $(document.createElement('div'));
		col_2.attr('class','col-6 spotifyPlayer');
		col_2.appendTo('.playlists');
	};

	function retrievePlaylists(searchQuery, offset){
		$.ajax({
			url: 'https://api.spotify.com/v1/search',
			method: 'GET',
			accepts: 'application/json',
			headers: {
				Authorization: 'Bearer BQA55Ir2FI7fIOiygOBF2f-AzIXijonctcI2MzhbXkKxdkscRrovZsYUO8ZYdpkPt0neTLBgFFOuo6ll4WZGOicEkzesySJVapweU31dBOLmw6o_jw3KjelrYRu-WyJOrJ9UfEg4tvGhiQ5ybzo'
				// Note: the authorization token expires after one hour!
				// It cannot be done in other way unless I put my Client Secret ID in the code.
				// Therefore, before the website is presented new token has to be generated.
			},
			data: {
				q: searchQuery,
				type: 'playlist',
				limit: 10,
				offset: offset
			},
			// success: function(response){console.log(response)}
			success: showURLs
	});
	}

	$('button.search').click(function(e){
		e.preventDefault();
		$('.playlists').empty();
		searchQuery = $('.search:input').val();
		retrievePlaylists(searchQuery, offset);
	});

	$('button.prev').click(function(){
		if (offset != 0){
			offset -= 10;
			$('.playlists').empty();
			retrievePlaylists(searchQuery, offset);
		}
	});

	$('button.next').click(function(){
		offset += 10;
		$('.playlists').empty();
		retrievePlaylists(searchQuery, offset);
	})

	// $('input').keydown(function(e){
	// 	if (e.keyCode == 13){
	// 		$('.playlists').empty();
	// 		searchQuery = $('.search:input').val();
	// 		retrievePlaylists(searchQuery, offset);
	// 	};
	// });

	$('body').on('click','a',function(){
		var uri = $(this).attr('data-playlist-uri');
		$('.spotifyPlayer').empty();
		$('.spotifyPlayer').append('<iframe src="https://open.spotify.com/embed?uri=' + uri + '&theme=white" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
	});

	// CALENDAR
	for (i=1; i<=8; i++){
		$('.firstRow').append('<div id="' + i + '" class="col cal"><span>' + i + '</span></div>');
	};

	for (i=9; i<=16; i++){
		$('.secondRow').append('<div id="' + i + '" class="col cal"><span>' + i + '</span></div>');
	};

	for (i=17; i<=24; i++){
		$('.thirdRow').append('<div id="' + i + '" class="col cal"><span>' + i + '</span></div>');
	};


    for (i=1; i<=24; i++){
		var d = new Date();
	    var n = d.getDate();
    	if($('#' + i).attr('id')<n){
    		$('#' + i).addClass('black');
    	};
    };

 	// Michal (end)

 });
