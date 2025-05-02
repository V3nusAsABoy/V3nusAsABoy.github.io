current = 0;

cards = document.getElementsByClassName("card");

navOptions = document.getElementById("cardsNav").children;

leftArrow = document.getElementById("leftArrow");
rightArrow = document.getElementById("rightArrow");

leftArrow.style.display = "none";
rightArrow.style.display = "block";

leftArrow.addEventListener("click", function(){
    current--;
    move(false);
    navOptions[current+1].classList.remove("current");
    navOptions[current].classList.add("current");
    if(rightArrow.style.display === "none"){
        rightArrow.style.display = "block";
    }
    if(current == 0){
        leftArrow.style.display = "none";
    }
});

rightArrow.addEventListener("click", function(){
    current++;
    move(true);
    navOptions[current-1].classList.remove("current");
    navOptions[current].classList.add("current");
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
            if(current != 0){
                let elem2 = cards[current-1];
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
            if(current != current.length-1){
                let elem2 = cards[current+1];
                elem2.style.left = pos + 100 + "em";
            }
        }
    }
}

const observer = new IntersectionObserver((divs) => {
    divs.forEach((div) => {
        if(div.isIntersecting){
            div.target.classList.add('bigger');
        } else {
            div.target.classList.remove('bigger');
        }
    })
})

const workDivs = document.querySelectorAll('.work');
workDivs.forEach((div) => observer.observe(div));