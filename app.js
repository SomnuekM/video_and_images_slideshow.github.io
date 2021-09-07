function img(src) {
    var el = document.createElement('img');
    el.classList.add("my_ads_medias");
    el.src = src;
    return el;
}

function vid() {
    //Accepts any number of 'src' to a same video ('.mp4', '.ogg' or '.webm')
    var el = document.createElement('video');
    el.classList.add("my_ads_medias");
    var source = document.createElement('source');

    for (var i = 0; i < arguments.length; i++) {
        source.src = arguments[i];
        source.type = "video/" + arguments[i].split('.')[arguments[i].split('.').length - 1];
        el.appendChild(source);
    }

    el.onplay = function() {
        clearInterval(sliding);
    };

    el.onended = function() {
        sliding = setInterval(rotateimages, 10 * 1000);
        rotateimages();
    };

    return el;
}



var galleryarray = [
    img('media/image1.jpg'),
    vid('media/video2.mp4'),
    img('media/image2.jpg'),
    vid('media/video4.mp4'),
    img('media/image3.jpg'),
];


function getMedias(media) {
    for (var i in media) {
        var res = media[i].split("."); //แยกเอา fileType
        if (res[res.length - 1] == 'png' || res[res.length - 1] == 'jpg' || res[res.length - 1] == 'JPG') {
            galleryarray.push(img(media[i]))
        }

        if (res[res.length - 1] == 'mp4' || res[res.length - 1] == 'MP4') {
            galleryarray.push(vid(media[i]))
        }
    }
}

console.log(galleryarray)

var curimg = 1;

function rotateimages() {
    $("#slideshow").fadeOut("slow");
    setTimeout(function() {
        curimg = (curimg < galleryarray.length - 1) ? curimg + 1 : 0
        document.getElementById('slideshow').innerHTML = '';

        document.getElementById('slideshow').appendChild(galleryarray[curimg]);

        if (galleryarray[curimg].tagName === "VIDEO") {
            galleryarray[curimg].setAttribute("autoplay", "true");
            galleryarray[curimg].muted = false; //Default Open Sound
            galleryarray[curimg].play();
        }

        $("#slideshow").fadeIn("slow");
    }, 1 * 1000);
}


var sliding;
window.addEventListener('load', function() {
    sliding = setInterval(rotateimages, 10 * 1000);
    rotateimages();
});




let textSlide = [
    " 🔘 The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.",
    " 🔘 A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."
]
var Alltxt = textSlide.join("&nbsp;&nbsp;");
document.getElementById('txtSlide').innerHTML = Alltxt;