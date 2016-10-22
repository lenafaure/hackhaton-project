window.onload = function(){

    var classname = document.getElementsByClassName("image");

    var openLargeImage = function() {


       this.className += " open";

      /*  setTimeout(function(){
            document.getElementById("content").className += "hide";
        }, 1000); */




    };

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', openLargeImage, false);
    }

};