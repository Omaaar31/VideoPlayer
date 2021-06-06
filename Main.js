let video = document.querySelector(".video");
let other = document.querySelector(".orange-other");
let orangeBar = document.querySelector(".orange-bar");
let btn = document.querySelector("#play-pause");
let muteBtn = document.querySelector("#mute");
let volumeSlider = document.querySelector("#volumeSlider");


// Play-Pause

function playPause() {

    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }

}

btn.addEventListener("click", function(){
    playPause();
});

// Barre orange

video.addEventListener("timeupdate", function (){
    
    let barPos = video.currentTime / video.duration;

    other.style.width = barPos * 100 + "%";
    
    if(video.ended){
        btn.className = "play";
    }
});

// Mute

muteBtn.addEventListener("click", function(){
    if(video.muted){
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    }
    else {
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }
});

// Volume 

volumeSlider.addEventListener("change", function(){
    video.volume = volumeSlider.value / 100;
});

// Barre orange clickable

let rect = orangeBar.getBoundingClientRect();
console.log(rect);

let larg = rect.width;

orangeBar.addEventListener("click", function(event){
    // Valeur de x  lors du click sur la barre orange
    let x = event.clientX - rect.left;
    //console.log(x);

    // Affichage x en pourcentage
    let largPercent = ((x*100)/larg);
    //console.log(largPercent);

    let currentTimeVideo = (largPercent * 108)/100;
    console.log(currentTimeVideo);

    video.currentTime = currentTimeVideo;

    other.style.width = largPercent + "%";
});
