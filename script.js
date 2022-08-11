// NOW I CLICK album-poster TO GET CURRENT SONG ID
		$(".poster").on("click", function(e){{
			alert("coming soon")
		}});

		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
			//console.log(dataSwitchId);

			// and now i use aplayer switch function see
			ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

			// aplayer play function
			// when i click any song to play
			ap.play();

			// click to slideUp player see
			$("#aplayer").addClass('showPlayer');
		});

		const ap = new APlayer({
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: [
		    {
		        name: 'Anoti',
		        artist: 'Wizkid',
		        url: 'audio/anoti.mp3',
		        cover: 'images/anoti.jpeg'
		    },
			{
		        name: 'First time in America',  // SONG NAME
		        artist: 'Naira marley', //ARTIST NAME
		        url: 'audio/first.mp3', // PATH NAME AND SONG URL
		        cover: 'images/naira.png' // COVER IMAGE
		    },
			{
				name: 'Reckless',
				artist: 'Wizkid',
				url: 'source/reck.mp3',
				cover: 'images/reck.jpg',
			},
			{
				name: 'Sip(Alcohol)',
				artist: 'Joeboy',
				url: 'audio/alcohol.mp3',
				cover: 'images/alcohol.png',
			},
			{
				name: 'Bounce',
				artist: 'Ruger',
				url: 'audio/ruger.mp3',
				cover: 'images/ruger.jpeg',
			},
			{
				name: 'Outside',
				artist: 'Buju',
				url: 'audio/outside.mp3',
				cover: 'images/Buju-Outside.jpg',
			},

			{
				name: 'History',
				artist: 'Cheque',
				url: 'audio/history.mp3',
				cover: 'images/history.jpeg',
			},
			{
				name: 'High',
				artist: 'Adekunle & Davido',
				url: 'audio/high.mp3',
				cover: 'images/high.png',
			},

		    ]
		});