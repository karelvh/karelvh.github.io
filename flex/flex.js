var descending = true;
function flex(){
    var container = document.getElementsByClassName("container")[0];

    var len = 1;
    for (var i = 0; i < len; i++) {
        if(descending === true){
            container.innerHTML += '<div class="box box10">💪</div><div class="box box9">💪</div><div class="box box8">💪</div><div class="box box7">💪</div><div class="box box6">💪</div><div class="box box5">💪</div><div class="box box4">💪</div><div class="box box3">💪</div><div class="box box2">💪</div><div class="box box1">💪</div>';

            descending = false;
        }
        if(descending === false){
            container.innerHTML += '<div class="box box1">💪</div><div class="box box2">💪</div><div class="box box3">💪</div><div class="box box4">💪</div><div class="box box5">💪</div><div class="box box6">💪</div><div class="box box7">💪</div><div class="box box8">💪</div><div class="box box9">💪</div><div class="box box10">💪</div>';

            descending = true;
        }
    }
}
