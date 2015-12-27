var descending = true;
function flex(){
    var container = document.getElementsByClassName("container")[0];

    var len = 1;
    for (var i = 0; i < len; i++) {
        if(descending === true){
            container.innerHTML += '<div class="box box1"><img src="../dist/img/cat17.gif" alt="cat" /></div><div class="box box2"><img src="../dist/img/cat16.gif" alt="cat" /></div><div class="box box3"><img src="../dist/img/cat15.gif" alt="cat" /></div><div class="box box4"><img src="../dist/img/cat14.gif" alt="cat" /></div><div class="box box5"><img src="../dist/img/cat13.gif" alt="cat" /></div>        <div class="box box6"><img src="../dist/img/cat12.gif" alt="cat" /></div><div class="box box7"><img src="../dist/img/cat11.gif" alt="cat" /></div><div class="box box8"><img src="../dist/img/cat10.gif" alt="cat" /></div><div class="box box9"><img src="../dist/img/cat9.gif" alt="cat" /></div><div class="box box10"><img src="../dist/img/cat8.gif" alt="cat" /></div><div class="box box9"><img src="../dist/img/cat7.gif" alt="cat" /></div><div class="box box8"><img src="../dist/img/cat6.gif" alt="cat" /></div><div class="box box7"><img src="../dist/img/cat5.gif" alt="cat" /></div><div class="box box6"><img src="../dist/img/cat4.gif" alt="cat" /></div><div class="box box5"><img src="../dist/img/cat3.gif" alt="cat" /></div><div class="box box4"><img src="../dist/img/cat2.gif" alt="cat" /></div><div class="box box3"><img src="../dist/img/cat1.gif" alt="cat" /></div>';

            descending = false;
        }
        if(descending === false){
            container.innerHTML += '<div class="box box1"><img src="../dist/img/cat1.gif" alt="cat" /></div><div class="box box2"><img src="../dist/img/cat2.gif" alt="cat" /></div><div class="box box3"><img src="../dist/img/cat3.gif" alt="cat" /></div><div class="box box4"><img src="../dist/img/cat4.gif" alt="cat" /></div><div class="box box5"><img src="../dist/img/cat5.gif" alt="cat" /></div>        <div class="box box6"><img src="../dist/img/cat6.gif" alt="cat" /></div><div class="box box7"><img src="../dist/img/cat7.gif" alt="cat" /></div><div class="box box8"><img src="../dist/img/cat8.gif" alt="cat" /></div><div class="box box9"><img src="../dist/img/cat9.gif" alt="cat" /></div><div class="box box10"><img src="../dist/img/cat10.gif" alt="cat" /></div><div class="box box9"><img src="../dist/img/cat11.gif" alt="cat" /></div><div class="box box8"><img src="../dist/img/cat12.gif" alt="cat" /></div><div class="box box7"><img src="../dist/img/cat13.gif" alt="cat" /></div><div class="box box6"><img src="../dist/img/cat14.gif" alt="cat" /></div><div class="box box5"><img src="../dist/img/cat15.gif" alt="cat" /></div><div class="box box4"><img src="../dist/img/cat16.gif" alt="cat" /></div><div class="box box3"><img src="../dist/img/cat17.gif" alt="cat" /></div>';

            descending = true;
        }
    }
}
