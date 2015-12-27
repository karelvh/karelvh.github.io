var currentTime = new Date().getHours();

function myCallback() {
    var salute;
    var h = currentTime;
    var coffee = '<img class="emoji" title="coffee" alt="coffee" src="https://github.global.ssl.fastly.net/images/icons/emoji/coffee.png" height="20" width="20" align="absmiddle">';
    var sunglasses = '<img class="emoji" title="sunglasses" alt="sunglasses" src="https://github.global.ssl.fastly.net/images/icons/emoji/sunglasses.png" height="20" width="20" align="absmiddle">';
    var moon = '<img class="emoji" title="moon" alt="moon" src="https://github.global.ssl.fastly.net/images/icons/emoji/crescent_moon.png" height="20" width="20" align="absmiddle">';
    var star = '<img class="emoji" title="star" alt="star" src="https://github.global.ssl.fastly.net/images/icons/emoji/star2.png" height="20" width="20" align="absmiddle">';

    // console.log(h);
    if(h >= 3 && h < 12){
        salute = "Good Morning " + coffee;
        // console.log("Morning");
    }
    else if (h >= 12 && h < 18){
        salute = "Good Afternoon " + sunglasses;
        // console.log("Afternoon");
    }
    else if (h >= 18 && h < 22){
        salute = "Good Evening "+ moon;
        // console.log("Evening");
    }
    else{
        salute = "Good Night "+ star;
        // console.log("Night");
    }
    document.getElementById('clockID').innerHTML = salute;
}

myCallback();
