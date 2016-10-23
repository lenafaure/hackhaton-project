window.onload = function(){

    // Fetching the elements with className "image"
    var image = document.getElementsByClassName("image");
    var thumbnail = document.getElementsByClassName("thumbnail");
    var preview = document.getElementById("preview");
    var close = document.getElementById("close");

    // Writing function for opening large Image
    var openLargeImage = function() {


     // On the clicked element, adding a class "open" wich we defined in the CSS and creates the scale              transition
     this.className += " open";

     preview.className = "";

     // Take care of the fact that the fixed element we get isn't vertically centered
     var windowHeight = window.innerHeight;
     var contentHeight = this.offsetHeight;
     this.style.top = ((windowHeight / 2) - (contentHeight / 2)) + 'px';

    };

    // Writing function for opening large Image
    var openThumbnailImage = function() {

        // Use src of clicked thumbnail to find corresponding large sized image
        imagePath = this.src;

        // Loop through large sized images
        for (var i = 0; i < image.length; i++) {

            // When we find the corresponding image
            if(imagePath == image[i].src) {

                // Identify it by giving a transitory id
                image[i].id = "waitingforclick";


                console.log(image[i]);

                // Close the preview
                closePreview();

                // Simulate a click on the large size image, which opens a new preview with the image corresponding to the clicked thumbnail
                document.getElementById('waitingforclick').click();

                // Suppress transitory id
                document.getElementById('waitingforclick').id = "";
            }

        }

    };

    // Writing function for closing overlay and large size image
    var closePreview = function() {

        // Replace classnames by "image" (this removes any "open" class on an image) and remove top margin
        for (var i = 0; i < image.length; i++) {
            image[i].className = "image";
            image[i].style.top = "";
        }

        // Add a classname "hide" to hide overlay
        preview.className = "hide";

    };

    // Add an eventListener on the "image" element
    for (var i = 0; i < image.length; i++) {
        image[i].addEventListener('click', openLargeImage, false);
    }

    // Add an eventListener on the "thumbnail" element
    for (var i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener('click', openThumbnailImage, false);
    }

    // Add an eventListener on the "close" element
    close.addEventListener('click', closePreview, false);

};