

function Clicked(){

    var input = document.getElementById("partitioned");

    console.log(input.value);

    if(input.value == "8888"){
        window.location.replace("../../pages/gifs/gif2.html");
    }else{
        $('#bad').modal('show');
    }
}

function ZoomImg(){

    $('#zoom-img').modal('show');

}