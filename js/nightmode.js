var nightmodeEnabled = 0;
var clock = document.getElementById('clock');

function nightmode(event) {
   var keyCode = event.which || event.keyCode;
   // if 'n' (night) is pressed
   if (keyCode === 110 && nightmodeEnabled === 0) {
      document.body.style.backgroundColor = "#202b37";
      clock.style.color = "#F3F3F2";
      nightmodeEnabled = 1;
      // console.log(nightmodeEnabled);
   }
   else if (keyCode === 110 && nightmodeEnabled === 1) {
      document.body.style.backgroundColor = "#ffffff";
      clock.style.color = "#202b37";
      nightmodeEnabled = 0;
      // console.log(nightmodeEnabled);
   }
}

var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 19) {
   document.body.style.backgroundColor = "#ffffff";
   clock.style.color = "#202b37";
}
else {
   document.body.style.backgroundColor = "#202b37";
   clock.style.color = "#F3F3F2";
   nightmodeEnabled = 1;
   // console.log(nightmodeEnabled);
}
