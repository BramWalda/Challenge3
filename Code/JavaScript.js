 $(document).ready(function(){
 
 	// Michal
 	// SPOTIFY

	var offset = 0;

	function showURLs(response){
		//console.log(response)
		var col = $(document.createElement('div'));
		col.attr('class','col');
		response.playlists.items.forEach(function(item){
			var row = $(document.createElement('div'));
			row.attr('class','row');
			row.attr('class','playlistsRows');
			var image = $(document.createElement('img'));
			image.attr('src',item.images[0].url);
			image.attr('alt','playlist image')
			image.attr('height',50);
			image.appendTo(row);
			row.append('<span><a href = "#APIs" class="playlistsLinks" data-playlist-uri="' + item.uri + '">' + item.name.substring(0, 40) + '</a></span>');
			row.appendTo(col);
		});
		col.appendTo('#playlists');
		var col_2 = $(document.createElement('div'));
		col_2.attr('class','col spotifyPlayer');
		col_2.appendTo('#playlists');
	};

	function retrievePlaylists(searchQuery, offset){
		$.ajax({
			url: 'https://api.spotify.com/v1/search',
			method: 'GET',
			accepts: 'application/json',
			headers: {
				Authorization: 'Bearer BQBX7ItjxuAIoAvjCozFdTU_U2tKr3QqGBdt3OYMJamM90G9r-7d-TE_2fLDQMFOno5GA_YMbZx5CrsVjHmmKy0_92emYztH9jzul8Yn9FHivbDJOdIaID8M1O3DKDZGgIRjmvuEz6d_JOJfw7E'
				// Note: the authorization token expires after one hour!
				// It cannot be done in other way unless I put my Client Secret ID in the code.
				// Therefore, before the website is presented and/or graded by Lars new token 
				// has to be generated.
			},
			data: {
				q: searchQuery,
				type: 'playlist',
				limit: 10,
				offset: offset
			},
			success: showURLs
	});
	}

	$('button.search').click(function(e){
		e.preventDefault();
		$('#playlists').empty();
		searchQuery = $('.search:input').val();
		retrievePlaylists(searchQuery, offset);
	});

	$('button.prev').click(function(){
		if (offset != 0){
			offset -= 10;
			$('#playlists').empty();
			retrievePlaylists(searchQuery, offset);
		}
	});

	$('button.next').click(function(){
		offset += 10;
		$('#playlists').empty();
		retrievePlaylists(searchQuery, offset);
	})

	$('body').on('click','a.playlistsLinks',function(){
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
	    if($('#' + i).attr('id')==n){
	    	$('#' + i).addClass('red');
	    } else {
	    	if($('#' + i).attr('id')<n){
	    		$('#' + i).addClass('black');	
	    	}
    	};
    };

    // WEATHER FORECAST
    
    // Search city
    function searchCities(sQuery){
    	$.ajax({
	     	url: 'http://dataservice.accuweather.com/locations/v1/cities/search',
	     	method: 'GET',
	     	data: {
		     	apikey: 'D9IWMj6LxmEmXVmemH4iJt8ZmzBas4M7',
		     	q: sQuery,
	    	},
	    	success: displayCities
		});
    };

     function displayCities(response){
     	//console.log(response)
     	var col = $(document.createElement('div'));
		col.attr('class','col');
		col.attr('class','text-left');
    	response.slice(0,5).forEach(function(item){
    		var div = $(document.createElement('div'));
    		div.append('<span><a href = "#weather" class="cities" data-ID="' + item.Key + '">' + item.EnglishName + ' (' + item.Country.EnglishName + ' - ' + item.AdministrativeArea.EnglishName + ')' + '</a></span>');
    		div.appendTo(col);
    		});
		col.appendTo('#weather');
     };

     // Download 5-day forecast for the selected city
     // (5+ days are not available for free)

     function fiveDayForecast(ID){
     	$.ajax({
     		url: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + ID,
     		method: 'GET',
     		data:{
     			apikey: 'D9IWMj6LxmEmXVmemH4iJt8ZmzBas4M7',
     			metric: true
     		},
     		success: displayForecastValues
     	})
     };

     function displayForecastValues(response){
     	var col = $(document.createElement('div'));
		col.attr('class','col');
		col.attr('class','text-left');
		response.DailyForecasts.forEach(function(item){
			var div = $(document.createElement('div'));
			div.append('<strong>' + item.Date.slice(0,10) + '</strong>, Temperature: Min ' + item.Temperature.Minimum.Value + ' °C; Max ' + item.Temperature.Maximum.Value + ' °C');
			div.appendTo(col);
		});
     	col.appendTo('#weather');
     };

     $('body').on('click','a.cities',function(){
		var ID = $(this).attr('data-ID');
		$('#weather').empty();
     	fiveDayForecast(ID);
     });

     $('button.searchCity').click(function(e){
		e.preventDefault();
		$('#weather').empty();
		sQuery = $('.searchCity:input').val();
		searchCities(sQuery);
	});

 	// Michal (end)

 	//Gia 

 	$('.recipes').hover(function(){
    	$(this).animate({'opacity': '1'},500);

    }, function(){
    	$(this).animate({'opacity': '0.85'}, 500);
    }

    );

    $('.button1').click(function() {
    		$(".1").html( "<img src='img/cookie.gif'>" );
			});

    $('.button2').click(function() {
    		$(".2").html( "<img src='img/present.gif' width='300'>" );
			});

    $('.button3').click(function() {
    		$(".3").html( "<img src='img/read.gif'>" );
			});

    $('.button4').click(function() {
    		$(".4").html( "<img src='img/spirit.gif' width='270'>" );
			});

    $('.button5').click(function() {
    		$(".5").html( "<img src='img/calm.gif'>" );
			});
  })
//Gia (end)

// Max

 // Max end



