var elem = document.getElementById("vid");
elem.pause();

function Video(){
    if (elem.requestFullscreen) {
    elem.classList.remove("removed");
    //elem.requestFullscreen();
    elem.play();
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