function moveRandom(el) {
    el.style.position = "absolute";
    el.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    el.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandomBtn = document.querySelector("#move-random");

if(moveRandomBtn){
    moveRandomBtn.addEventListener("mouseenter", function (e) {
        moveRandom(e.target);
    });
}