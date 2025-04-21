current = 0;

cards = document.getElementsByClassName("card");

leftArrow = document.getElementById("leftArrow");
rightArrow = document.getElementById("rightArrow");

leftArrow.style.display = "none";
rightArrow.style.display = "block";

leftArrow.addEventListener("click", function(){
    current--;
    move(true);
    if(rightArrow.style.display === "none"){
        rightArrow.style.display = "block";
    }
    if(current == 0){
        leftArrow.style.display = "none";
    }
});

rightArrow.addEventListener("click", function(){
    current++;
    move(false);
    if(leftArrow.style.display === "none"){
        leftArrow.style.display = "block";
    }
    if(current == cards.length-1){
        rightArrow.style.display = "none";
    }
});

function move(left){
    let id = null;
    clearInterval(id);
    if(left){
        pos = 0;
        id = setInterval(frameLeft, 5)
    } else{
        clearInterval(id);
        pos = -100;
        id = setInterval(frameRight, 5)
    }
    function frameLeft() {
        if(pos == -105){
            clearInterval(id);
        } else{
            let elem = cards[current];
            elem.style.left = pos + 100 + "em";
            pos-=5;
            if(current != current.length - 1){
                let elem2 = cards[current+1];
                elem2.style.left = pos + "em";
            }
        }
    }
    function frameRight() {
        if(pos == 5){
            clearInterval(id);
        } else {
            let elem = cards[current];
            elem.style.left = pos + "em";
            pos = pos+5;
            if(current != 0){
                let elem2 = cards[current-1];
                elem2.style.left = pos + 100 + "em";
            }
        }
    }
}