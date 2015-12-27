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
