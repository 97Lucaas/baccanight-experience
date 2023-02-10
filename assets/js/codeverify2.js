

function Clicked(){

    var input = document.getElementById("partitioned");

    console.log(input.value);

    if(input.value == "6578" || input.value == "DEV"){
        window.location.replace("../../pages/gifs/gif2.html");
    }else{
        $('#bad').modal('show');
    }
}

function ZoomImg(){

    $('#zoom-img').modal('show');

}

function Help(){

    $('#help').modal('show');

}