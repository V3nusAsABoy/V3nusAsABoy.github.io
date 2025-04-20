current = 0;

cards = document.getElementsByClassName("card");

leftArrow = document.getElementById("leftArrow");
rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", function(){
    current--;
    move(true);
    if(rightArrow.style.display == "none"){
        rightArrow.style.display == "block";
    }
});

rightArrow.addEventListener("click", function(){
    current++;
    move(false);
    if(leftArrow.style.display == "none"){
        leftArrow.style.display = "block";
    }
});

function frameLeft() {
    if(pos == 100){
        clearInterval(id);
    } else{
        let elem = cards[current];
        elem.style.right = pos + "em";
        pos++;
    }
}
function frameRight() {
    if(pos == 100){
        clearInterval(id);
    } else {
        let elem = cards[current];
        elem.style.left = pos + "em";
        pos++;
    }
}

function move(left){
    pos = 0;
    let id = null;
    clearInterval(id);
    if(left){
        id = setInterval(frameLeft, 5)
        if(current != 0){
            clearInterval(id);
            setInterval(frameRight, 5)
        }
        clearInterval(id);
    } else{
        id = setInterval(frameRight, 5)
        if(current != cards.length){
            clearInterval(id);
            setInterval(frameRight, 5)
        }
        clearInterval(id);
    }
}