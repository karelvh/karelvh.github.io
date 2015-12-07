function tickTick(){
    document.getElementsByTagName('scripts')[0].innerHTML = "";
    var script = document.createElement('script');
    script.src = "http://www.timeapi.org/cet/now.json?callback=myCallback";
    document.getElementsByTagName('scripts')[0].appendChild(script);
    var interval = setInterval(tickTick, 30000);
}

function myCallback(json) {
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var cetDate = new Date(json.dateString);
    var y = cetDate.getFullYear();
    var month = cetDate.getMonth();
    var monthNumber = month + 1;
    var d = cetDate.getDate();
    var h = cetDate.getHours();
    var minute = cetDate.getMinutes();
    minute = checkTime(minute);
    if(5 < h < 12){
        document.getElementById('clock').innerHTML = "Good Morning ☕️ ,</br> it's " + h + 'h' + minute + ' CET';
    }
    if(12 < h < 18){
        document.getElementById('clock').innerHTML = "Good Afternoon 😎,</br> it's " + h + 'h' + minute + ' CET';
    }
    if(18 < h < 22){
        document.getElementById('clock').innerHTML = "Good Evening 🌙, </br> it's " + h + 'h' + minute + ' CET';
    }
    else{
        document.getElementById('clock').innerHTML = "Good Night 🌟,</br> it's " + h + 'h' + minute + ' CET';
    }
    // document.getElementById('clock').innerHTML = y + '/'+ monthNumber + '/' + d + ' '+ h + ':' + minute + ' BRU';
    // console.log(cetDate);
    // var interval = setInterval(myCallback, 5000);
}

function checkTime(t){
    if (t < 10) {t = "0" + t; }
    return t;
}
