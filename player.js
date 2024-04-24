// ---------------DAtA-------------
let playlist = {
	title: 'Hip-hop Hits',
	coverImage: './Playlist1.jpeg',
	info: {
		totalTracksCount: 4,
		totalTracksDurationInSecond: 733,
	},
	tracks: [
		{
			coverImageUrl: './track1.jpeg',
			artistName: 'Eminem',
			title: 'Rap God',
			fileUrl: './Eminem_-_Rap_God.mp3',
			isHit: false,
		},
		{
			coverImageUrl: './track2.jpeg',
			artistName: '50 cent',
			title: 'In da Club',
			fileUrl: './50 Cent_-_In_Da_Clubs.mp3',
			isHit: true,
		},
	],
}

// ------------RANDER------------------------------------
renderPlayList(playlist)


// ------------------------------------------------------
function renderPlayList(playlistForRendering) {
	renderPlayListHeader(playlistForRendering)

	renderTrack(playlistForRendering.tracks[0]);
	renderTrack(playlistForRendering.tracks[1]);
}

// ------Логотип отрисовки шапки входного плейлиста------
function renderPlayListHeader(playlistForRendering){
	let playListImageElement = document.createElement('img');
	playListImageElement.src = playlistForRendering.coverImage;
	document.body.append(playListImageElement);

	let playlistTitleElement = document.createElement('h2')
	playlistTitleElement.append(playlistForRendering.title);
	document.body.append(playlistTitleElement);
};

// -----логика отрисовки входного трека------

function renderTrack(inputTrackForRendering){
	
	let trekElement = document.createElement("div");
	trekElement.append(inputTrackForRendering.artistName + '-' + inputTrackForRendering.title);
	
	let coverElement = document.createElement('img');
	coverElement.src = inputTrackForRendering.coverImageUrl;
	trekElement.append(coverElement);

	let playerElement = document.createElement('audio');
	playerElement.src = inputTrackForRendering.fileUrl;
	playerElement.controls = true;
	trekElement.append(playerElement);


	document.body.append(trekElement);
};


