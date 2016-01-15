var nightmodeEnabled = 0;
var currentTime = new Date().getHours();
document.addEventListener("keypress", nightmode);

function nightmode(event) {
   var keyCode = event.which || event.keyCode;
   if (keyCode === 110 && nightmodeEnabled === 0) {
      document.body.className = "body--night";
      nightmodeEnabled = 1;
   }
   else if (keyCode === 110 && nightmodeEnabled === 1) {
      document.body.className = "";
      nightmodeEnabled = 0;
   }
}

// if (7 <= currentTime && currentTime < 19) {
//    document.body.className = "";
//    nightmodeEnabled = 0;
// }
// else {
//    document.body.className = "body--night";
//    nightmodeEnabled = 1;
//    // console.log(nightmodeEnabled);
// }

function emojiFunk() {
    var salute;
    var h = currentTime;
    var coffee = '<img class="emoji" title="coffee" alt="coffee" src="https://github.global.ssl.fastly.net/images/icons/emoji/coffee.png" height="50" width="50" align="absmiddle">';
    var sunglasses = '<img class="emoji" title="sunglasses" alt="sunglasses" src="https://github.global.ssl.fastly.net/images/icons/emoji/sunglasses.png" height="50" width="50" align="absmiddle">';
    var moon = '<img class="emoji" title="moon" alt="moon" src="https://github.global.ssl.fastly.net/images/icons/emoji/crescent_moon.png" height="50" width="50" align="absmiddle">';
    var star = '<img class="emoji" title="star" alt="star" src="https://github.global.ssl.fastly.net/images/icons/emoji/star2.png" height="50" width="50" align="absmiddle">';

    // console.log(h);
    if(h >= 3 && h < 12){
        salute = "Good morning and welcome " + coffee;
        // console.log("Morning");
    }
    else if (h >= 12 && h < 18){
        salute = "Good afternoon and welcome " + sunglasses;
        // console.log("Afternoon");
    }
    else if (h >= 18 && h < 22){
        salute = "Good evening and welcome "+ moon;
        // console.log("Evening");
    }
    else{
        salute = "Good night and welcome "+ star;
        // console.log("Night");
    }
    document.getElementById('emojiID').innerHTML = salute;
}

(function(){
    var salute;
    var h = currentTime;

    if(h >= 3 && h < 12){
        salute = 'Good morning web traveller <span id="unicode"></span>';
        // console.log("Morning");
    }
    else if (h >= 12 && h < 18){
        salute = 'Good afternoon web traveller <span id="unicode"></span>';
        // console.log("Afternoon");
    }
    else if (h >= 18 && h < 22){
        salute = 'Good evening web traveller <span id="unicode"></span>';
        // console.log("Evening");
    }
    else{
        salute ='Good night web traveller <span id="unicode"></span>';
        // console.log("Night");
    }
    document.getElementById('emojiID').innerHTML = salute;
})();

(function smileyCycler(){
    // smile, sunbehind cloud, sun, thunder,
    // var circles = "&#10690;";
    var happy = "&#9786;";
    // var cloud = "&#9925;";
    var sad = "&#9785;";
    // var sun = "&#9788;";
    var sun = "&#9737;";
    // var thunder = "&#9928;";
    var snow = "&#10054;";
    // var rocket = "&#128640;";
    var umbrella = "&#9730;";
    var airplane = "&#9992;";

    var unicodesArr = [sad, umbrella, airplane, sun, happy, snow];
    var i = 0;
    var unicodesLength = unicodesArr.length;
    var unicodeDiv = document.getElementById('unicode');


    window.setInterval(function(){
        if(i === unicodesLength) {
            i = 0;
        }

        var unicode = unicodesArr[i++];
        unicodeDiv.innerHTML = unicode;
        // console.log(unicode);
        // console.log(unicodeDiv);
    }, 200);
})();
