var nightmodeEnabled = 0;
var clock = document.getElementById('clockID');

document.addEventListener("keypress", nightmode);

function nightmode(event) {
   var keyCode = event.which || event.keyCode;
   // if 'n' (night) is pressed
   if (keyCode === 110 && nightmodeEnabled === 0) {
      document.body.className = "body--night";
      clock.className = "clock clock--night";
      nightmodeEnabled = 1;
      // console.log(nightmodeEnabled);
   }
   else if (keyCode === 110 && nightmodeEnabled === 1) {
      document.body.className = "";
      clock.className = "clock ";
      nightmodeEnabled = 0;
      // console.log(nightmodeEnabled);
   }
}

if (7 <= currentTime && currentTime < 19) {
   document.body.className = "";
   clock.className = "clock ";
   nightmodeEnabled = 0;
}
else {
   document.body.className = "body--night";
   clock.className = "clock clock--night";
   nightmodeEnabled = 1;
   // console.log(nightmodeEnabled);
}
