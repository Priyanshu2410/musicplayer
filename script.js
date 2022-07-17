console.log("Welcome to spotify");

// variables
let songindex = 0;
let audioElement = new Audio('songs/2.mpeg');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogress');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Tu Aake Dekhle", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Main Dhoondne Ko Zamaane mein", filepath: "songs/2.mpeg", coverpath: "covers/ 1.jpg" },
    { songName: "Galti", filepath: "songs/3.mpeg", coverpath: "covers/1.jpg" },
    { songName: "Tere ishq mein", filepath: "songs/4.mpeg", coverpath: "covers/1.jpg" },
    { songName: "Let me Down Slowly", filepath: "songs/5.mpeg", coverpath: "covers/1.jpg" },
]

// songitem.forEach((element, i)=>{
//     console.log(element,i);
//     element.getElementByTagName("img")[0].src=songs[i].coverpath;
//     element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
// })
//  audioElement.play();

//  for play and pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

// Events

audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeallplays = () => {
    // e.target.classList.add('fa-circle-pause');
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText = songs[songindex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('before').addEventListener('click', () => {
    if (songindex >= 5) {
        songindex = 0;
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById('next').addEventListener('click', () => {
    if (songindex < 0) {

        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
        songindex = 0;

    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText = songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
