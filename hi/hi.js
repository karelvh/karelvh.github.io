var nightmodeEnabled = 0;
var currentTime = new Date().getHours();
document.addEventListener("keypress", nightmode);

function nightmode(event) {
   var keyCode = event.which || event.keyCode;
   if (keyCode === 110 && nightmodeEnabled === 0) {
      document.body.style.backgroundColor = "#ef4723";
      nightmodeEnabled = 1;
   }
   else if (keyCode === 110 && nightmodeEnabled === 1) {
      document.body.style.backgroundColor = "#ffffff";
      nightmodeEnabled = 0;
   }
}

if (7 <= currentTime && currentTime < 19) {
   document.body.style.backgroundColor = "#ffffff";
   nightmodeEnabled = 0;
}
else {
   document.body.style.backgroundColor = "#ef4723";
   nightmodeEnabled = 1;
   // console.log(nightmodeEnabled);
}
