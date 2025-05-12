current = 0;

cards = document.getElementsByClassName("card");

for(let i = 1; i < cards.length; i++){
    cards[i].style.display = "none";
}

navOptions = document.getElementById("cardsNav").children;

leftArrow = document.getElementById("leftArrow");
rightArrow = document.getElementById("rightArrow");

leftArrow.style.display = "none";
rightArrow.style.display = "block";

leftArrow.addEventListener("click", function(){
    current--;
    cards[current].style.display = "";
    move(false, cards[current], cards[current+1]);
    navOptions[current+1].classList.remove("current");
    navOptions[current].classList.add("current");
    if(rightArrow.style.display === "none"){
        rightArrow.style.display = "";
    }
    if(current == 0){
        leftArrow.style.display = "none";
    }
});

rightArrow.addEventListener("click", function(){
    current++;
    cards[current].style.display = "";
    move(true, cards[current], cards[current-1]);
    navOptions[current-1].classList.remove("current");
    navOptions[current].classList.add("current");
    if(leftArrow.style.display === "none"){
        leftArrow.style.display = "";
    }
    if(current == cards.length-1){
        rightArrow.style.display = "none";
    }
});

function move(left, elem, elem2){
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
            elem2.style.display = "none";
        } else{
            elem.style.left = pos + 100 + "em";
            pos-=5;
            if(current != 0){
                elem2.style.left = pos + "em";
            }
        }
    }
    function frameRight() {
        if(pos == 5){
            clearInterval(id);
            elem2.style.display = "none";
        } else {
            elem.style.left = pos + "em";
            pos = pos+5;
            if(current != current.length-1){
                elem2.style.left = pos + 100 + "em";
            }
        }
    }
}

const observer = new IntersectionObserver((divs) => {
    const divlis = [].slice.call(document.getElementById('sidebarExperience').children);
    divs.forEach((div) => {
        if(div.isIntersecting){
            div.target.classList.add('bigger');
            divlis.forEach((divli) =>{
                if(div.target.classList.contains((divli.classList[0]))){
                    divli.style.color = "white";
                    divli.children[0].style.color = "white";
                } else {
                    divli.style.color = "rgb(166, 166, 166)";
                    divli.children[0].style.color = "rgb(166, 166, 166)";
                }
            })
        } else {
            div.target.classList.remove('bigger');
        }
    })
})

const workDivs = document.querySelectorAll('.work');
workDivs.forEach((div) => observer.observe(div));

for(let i = 0; i < navOptions.length; i++){
    navOptions[i].addEventListener("click", function(){
        if(i != current){
            cards[i].style.display = "";
            if(i > current){
                navOptions[current].classList.remove("current");
                move(true, cards[i], cards[current]);
                current = i;
                navOptions[current].classList.add("current");
                if(leftArrow.style.display === "none"){
                        leftArrow.style.display = "block";
                }
                if(current == cards.length-1){
                        rightArrow.style.display = "none";
                }
            }
            else{
                navOptions[current].classList.remove("current");
                move(false, cards[i], cards[current]);
                current = i;
                navOptions[current].classList.add("current");
                if(rightArrow.style.display === "none"){
                    rightArrow.style.display = "block";
                }
                if(current == 0){
                    leftArrow.style.display = "none";
                }
            }
        }
    });
}