var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate = .9 * video.playbackRate;
    console.log("New speed is %s", video.playbackRate);
    
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate = video.playbackRate / .9;
    console.log("New speed is %s", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 5 > video.duration) {
        video.currentTime = 0;
    }
    else {
        video.currentTime += 5;
    }
	console.log("Current location %s", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    muted_object = document.querySelector("#mute");
    if (!video.muted) {
        video.muted = true;
        muted_object.innerHTML = "Unmute";
    }
    else {
        video.muted = false;
        muted_object.innerHTML = "mute";
    }
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
    volumeSlider = document.querySelector("#volumeSlider")
    video.volume = volumeSlider.value / 100;
    document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
    console.log("%s", video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
    video.classList.toggle("oldTime");
    // video.className = "oldTime";
});

document.querySelector("#original").addEventListener("click", function() {
    // video.className = "original";
    video.classList.toggle("oldTime");
});


