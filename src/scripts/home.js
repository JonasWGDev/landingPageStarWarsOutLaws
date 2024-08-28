
//var to get background section element
let bgSection = document.getElementById("background");

// var current image
let currentImg = 1;

// var to handle time to change bg
let timeToChange = 3000;

// function to handle change bg
function changeBg() {
    if (currentImg >= 3) {
        currentImg = 1;
    } else {
        currentImg++;
    }

    bgSection.style.backgroundImage = `
    url("/src/img/background-${currentImg}.jpg")
    `;
}

// calling changeBg function
setInterval(() => {
    changeBg();
}, timeToChange);

