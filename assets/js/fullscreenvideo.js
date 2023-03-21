var elem = document.getElementById("vid");
elem.pause();

function video(){
    elem.classList.remove("removed");
    elem.play();

    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    }
}

addEventListener('fullscreenchange', () => { 

    if (!document.fullscreenElement) {
        elem.classList.add("removed");
        elem.currentTime = 0;
        elem.pause();
    }

 });

 elem.addEventListener('ended', () => { 

    window.location.replace("../../pages/clues/clue1.html");

 });