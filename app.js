const music = new Audio('audio/Ariana Grande - yes, and_ (official audio).mp3');

// Master Play

const songs = [

  // Menu Side 
  {
    id: "9",
    songName: 'I Need You Most Of All<br><div class="subtitle">Stephen Sanchez</div>',
    poster: "img/9.png",
  },
  {
    id: "10",
    songName: 'I Like It<br><div class="subtitle">DeBarge</div>',
    poster: "img/10.png",
  },
  {
    id: "11",
    songName: 'Sprinter<br><div class="subtitle">Dave, Central Cee</div>',
    poster: "img/11.png",
  },
  {
    id: "12",
    songName: 'Superman<br><div class="subtitle">Eminem</div>',
    poster: "img/12.png",
  },
  {
    id: "13",
    songName: 'Nobody Knows<br><div class="subtitle">Kiss Of Life</div>',
    poster: "img/13.png",
  },
  {
    id: "14",
    songName: 'Perfect Night<br> <div class="subtitle">LE SSERAFIM</div>',
    poster: "img/14.png",
  },
  {
    id: "15",
    songName: 'Hurt<br><div class="subtitle">NewJeans</div>',
    poster: "img/15.png",
  },
  {
    id: "16",
    songName: 'Love Someone<br><div class="subtitle">Lukas Graham</div>',
    poster: "img/16.png",
  },
  {
    id: "17",
    songName: 'Positions<br><div class="subtitle">Ariana Grande</div>',
    poster: "img/17.png",
  },
  {
    id: "18",
    songName: 'Heaven Is You<br><div class="subtitle">Joshua Basset</div>',
    poster: "img/18.png",
  },
  {
    id: "19",
    songName: 'Drunk Text<br><div class="subtitle">Henry Moodie</div>',
    poster: "img/19.png",
  },
  {
    id: "20",
    songName: 'Older<br><div class="subtitle">Sasha Alex Sloan</div>',
    poster: "img/20.png",
  },

  // Song Side 
  {
    id: "1",
    songName: 'Feather<br><div class="subtitle">Sabrina Carpenter</div>',
    poster: "img/1.png",
  },
  {
    id: "7",
    songName: 'Greedy<br><div class="subtitle">Tate Mcrae</div>',
    poster: "img/7.png",
  },
  {
    id: "8",
    songName: 'Sparks Fly<br><div class="subtitle">Taylor Swift</div>',
    poster: "img/8.png",
  },
  {
    id: "222",
    songName: 'Starboy<br> <div class="subtitle">The Weekend</div>',
    poster: "img/222.png",
  },
  {
    id: "111",
    songName: 'Yes, And?<br> <div class="subtitle">Ariana Grande</div>',
    poster: "img/111.png",
  },
  {
    id: "2",
    songName: 'Paint The Town Red<br><div class="subtitle">Doja Cat</div>',
    poster: "img/2.png",
  },
  {
    id: "3",
    songName: 'Vampire<br><div class="subtitle">Olivia Rodrigo</div>',
    poster: "img/3.png",
  },
  {
    id: "333",
    songName: 'Heartbreak Anniversary<br><div class="subtitle">Giveion</div>',
    poster: "img/333.png"
  },
  {
    id: "5",
    songName: 'Lil Boo Thang<br><div class="subtitle">Paul Russell</div>',
    poster: "img/5.png",
  },
  {
    id: "6",
    songName: 'Here With Me<br><div class="subtitle">D4vd</div>',
    poster: "img/6.png",
  }
  
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});




let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
  if(music.paused || music.currentTime<=0) {
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');
  } else {
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.remove('bi-pause-circle-fill');
    masterPlay.classList.add('bi-play-circle-fill');
  }
});




const makeAllplays = () => {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
    el.classList.add('bi-pause-circle-fill');
    el.classList.remove('bi-play-circle-fill');
  })
}

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
      el.style.background = 'rgb(105, 105, 105, .0)';
  })
}


let index=0;
let posterMasterPlay = document.getElementById('posterMasterPlay');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
  e.addEventListener('click', (el)=>{
    index = el.target.id;
    music.src = `audio/${index}.mp3`;
    posterMasterPlay.src= `img/${index}.png`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach(elss => {
      let { songName } = elss;
      title.innerHTML = songName;
      
    });

    makeAllBackground();
    wave.classList.add('active1');
    Array.from(document.getElementsByClassName('songItem'))[index-9].style.background = "rgb(105, 105, 105, .1)";
    // makeAllplays();
    e.target.classList.remove('bi-pause-circle-fill');
    e.target.classList.add('bi-play-circle-fill');

  })

  
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);
  
  // console.log(min1);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;


  let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
  music.currentTime = seek.value * music.duration / 100;
});















// Popular Songs Button

let popSongLeft = document.getElementById('popSongLeft');
let popSongRight = document.getElementById('popSongRight');
let popSongs = document.getElementsByClassName('popSongs')[0];

popSongRight.addEventListener('click', ()=> {
  popSongs.scrollLeft += 330;
})

popSongLeft.addEventListener('click', ()=> {
  popSongs.scrollLeft -= 330;
})


// Popular Artist Button

let popArtistLeft = document.getElementById('popArtistLeft');
let popArtistRight = document.getElementById('popArtistRight');
let popArtist = document.getElementsByClassName('item')[0];
   
popArtistRight.addEventListener('click', ()=> {
  popArtist.scrollLeft += 330;
})

popArtistLeft.addEventListener('click', ()=> {
  popArtist.scrollLeft -= 330;
})

