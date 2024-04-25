// ---------------DAtA-------------
let playlist = {
	title: 'Hip-hop Hits',
	coverImage: '/img/Playlist1.jpeg',
	info: {
		totalTracksCount: 4,
		totalTracksDurationInSecond: 733,
	},
	tracks: [
		{
			coverImageUrl: '/img/track1.jpeg',
			artistName: 'Eminem',
			title: 'Rap God',
			fileUrl: '/source/Eminem_-_Rap_God.mp3',
			isHit: false,

		},
		{
			coverImageUrl: '/img/track2.jpeg',
			artistName: '50 cent',
			title: 'In da Club',
			fileUrl: '/source/50 Cent_-_In_Da_Clubs.mp3',
			isHit: true,
		},
	],
}

// ------------RENDER------------------------------------
renderPlayList(playlist)


// ------------------------------------------------------
function renderPlayList(playlistForRendering) {
	renderPlayListHeader(playlistForRendering)

	renderTrack(playlistForRendering.tracks[0]);
	renderTrack(playlistForRendering.tracks[1]);
}

// находим элемент с классом player__track-list

// ------Логотип отрисовки шапки входного плейлиста------
function renderPlayListHeader(playlistForRendering){
	const playerHeader = document.querySelector('.player__header');

	let playListImageElement = document.createElement('img');
	playListImageElement.classList.add('player__header-image')
	playListImageElement.src = playlistForRendering.coverImage;
	playerHeader.append(playListImageElement)
	// document.body.append(playListImageElement);
	
	let playlistTitleElement = document.createElement('h2')
	playlistTitleElement.append(playlistForRendering.title);
	playerHeader.append(playlistTitleElement);

	// document.body.append(playlistTitleElement);
};

// -----логика отрисовки входного трека------

function renderTrack(inputTrackForRendering){
	// находим тег в который будет добавлен созданный плейлист
	const playerTrackList = document.querySelector('.player__track-list');
// создание div с треком и добавляем к нему класс
	let trekElement = document.createElement("div"); 
	trekElement.classList.add("track-item");

	// создание тега Img для картинки трека и добавление еги в треклист
	let coverElement = document.createElement('img');
	coverElement.src = inputTrackForRendering.coverImageUrl;
	trekElement.append(coverElement);

	trekElement.append(inputTrackForRendering.artistName + '-' + inputTrackForRendering.title);
	
	let playerElement = document.createElement('audio');
	playerElement.classList.add("track-item__custom-audio");

	playerElement.src = inputTrackForRendering.fileUrl;
	playerElement.controls = true;
	trekElement.append(playerElement);


	playerTrackList.append(trekElement);
};


	