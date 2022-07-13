const productContainers = [...document.querySelectorAll('.swiper-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const button = document.getElementById('btn');
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth -50;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth -50;
    })
})
button.addEventListener('click',function Onclick(event){
    console.log(event.target);
    event.target.style.color = 'white';
})

/* nav bar*/
/*const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".headbar");
const links = document.querySelectorAll(".headbar span");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});*/

/* Music player*/

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.querySelector('#track');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

//songs const
const song1=document.getElementById('song1');
const song2=document.getElementById('song2');
const song3=document.getElementById('song3');
const song4=document.getElementById('song4');
const song5=document.getElementById('song5');
const song6=document.getElementById('song6');
const song7=document.getElementById('song7');
const song8=document.getElementById('song8');
const song9=document.getElementById('song9');
const song10=document.getElementById('song10');
const song11=document.getElementById('song11');
const song12=document.getElementById('song12');
const song13=document.getElementById('song13');
// Song titles
const songs = ['10k-KB','Memories-chromey', 'Stranger-internetBoi','Heartless-chromey','goodbye letter-Dulai','King Jesus','wish4u','where does the rain come from','Fake It','Nokia Ringtone','7-genθ','Heal-miraie','Everything-Hulvey'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `audios/${song}.mp3`;
  cover.src = `song-image/${song}.webp`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
});
/*song1.addEventListener('click',()=>{
  songIndex=2;
  loadSong(songs[songIndex]);
  playSong();
});*/
song1.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=0;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song2.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=1;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song3.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=2;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song4.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=3;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song5.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=4;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song6.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=5;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song7.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=6;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song8.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=7;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song9.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=8;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song10.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=9;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song11.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=10;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song12.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=11;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

song13.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play');
  songIndex=12;
  loadSong(songs[songIndex]);
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});
// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);



