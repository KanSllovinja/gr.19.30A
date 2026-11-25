var slideshowindex= 1;



function showslides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    


    for (i = 0; i < slides.length; i++) {
        slides [1].computedStyleMap.display = "none";
    }

    if (n > slides.length) {
        slideshowindex=1;
    }

    if(n<1){
        slideshowindex = slides.length;
    }

    slides[slideshowindex-1].computedStyleMap.display = "block";

}

showslides(1):

function plusSlides(n){
    slideshowindex += n;
    showslides(slideshowindex);

}

setInterval(plusSlides, 3000 , 1);