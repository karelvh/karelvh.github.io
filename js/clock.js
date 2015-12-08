function tickTick(){
    document.getElementsByTagName('scripts')[0].innerHTML = "";
    var script = document.createElement('script');
    script.src = "http://www.timeapi.org/cet/now.json?callback=myCallback";
    document.getElementsByTagName('scripts')[0].appendChild(script);
    var interval = setInterval(tickTick, 60000);
}

function myCallback(json) {
    var salute;
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var cetDate = new Date(json.dateString);
    var y = cetDate.getFullYear();
    var month = cetDate.getMonth();
    var monthNumber = month + 1;
    var d = cetDate.getDate();
    var h = cetDate.getHours();
    var minute = cetDate.getMinutes();
    minute = checkTime(minute);
    var coffee = coffee = '<img class="emoji" title="coffee" alt="coffee" src="https://github.global.ssl.fastly.net/images/icons/emoji/coffee.png" height="20" width="20" align="absmiddle">';
    var sunglasses = '<img class="emoji" title="sunglasses" alt="sunglasses" src="https://github.global.ssl.fastly.net/images/icons/emoji/sunglasses.png" height="20" width="20" align="absmiddle">';
    var moon = '<img class="emoji" title="moon" alt="moon" src="https://github.global.ssl.fastly.net/images/icons/emoji/crescent_moon.png" height="20" width="20" align="absmiddle">';
    var star = '<img class="emoji" title="star" alt="star" src="https://github.global.ssl.fastly.net/images/icons/emoji/star2.png" height="20" width="20" align="absmiddle">';

    // console.log(h);
    if(h >= 3 && h < 12){
        salute = "Good Morning " + coffee + ",</br> it's " + h + 'h' + minute + ' CET';
        // console.log("Morning");
    }
    else if (h >= 12 && h < 18){
        salute = "Good Afternoon " + sunglasses + ",</br> it's " + h + 'h' + minute + ' CET';
        // console.log("Afternoon");
    }
    else if (h >= 18 && h < 22){
        salute = "Good Evening "+ moon +",</br> it's " + h + 'h' + minute + ' CET';
        // console.log("Evening");
    }
    else{
        salute = "Good Night "+ star +",</br> it's " + h + 'h' + minute + ' CET';
        // console.log("Night");
    }
    document.getElementById('clock').innerHTML = salute;
}

function checkTime(t){
    if (t < 10) {t = "0" + t; }
    return t;
}
