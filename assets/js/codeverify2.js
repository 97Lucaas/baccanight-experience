

function Clicked(){

    var input = document.getElementById("partitioned");

    console.log(input.value);

    if(input.value == "8888"){
        $('#good').modal('show');
    }else{
        $('#bad').modal('show');
    }
}

function Next(){
    window.location.replace("../../pages/gifs/gif2.html");
}

function ZoomImg(){

    $('#zoom-img').modal('show');

}