

function Video(){
    var elem = document.getElementById("vid");
    if (elem.requestFullscreen) {
    elem.classList.remove("removed");
    elem.requestFullscreen();
    elem.play();
    }
}