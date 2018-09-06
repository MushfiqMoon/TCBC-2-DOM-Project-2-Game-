
// console.log('connected');


const topB = document.getElementById('top');
const leftB = document.getElementById('left');
const rightB = document.getElementById('right');
const bottomB = document.getElementById('bottom');


let ball = document.querySelector('.ball');

let x = 0;
let y = 0;

const gameover = () => console.log('Game Over');

let movingBallRight = function () {
    setInterval(function () {
        if (x >= 580) {
            gameover()
        } else {
            x = x + 20;
            ball.style.left = `${x}px`;
        }
    }, 500)



}

let movingBallLeft = function () {
    setInterval(function () {
        if (x <= 0) {
            gameover()
        } else {
            x = x - 20;
            ball.style.left = `${x}px`;
        }
    }, 500)
}

let movingBallTop = function () {
    setInterval(function () {
        if (y <= 0) {
            gameover()
        } else {
            y = y - 20;
            ball.style.top = `${y}px`;
        }
    }, 500)
}

let movingBallBottom = function () {
    setInterval(function () {
        if (y >= 380) {
            gameover()
        } else {
            y = y + 20;
            ball.style.top = `${y}px`;
        }
    }, 500)
}


leftB.addEventListener('click', movingBallLeft);
topB.addEventListener('click', movingBallTop);
rightB.addEventListener('click', movingBallRight);
bottomB.addEventListener('click', movingBallBottom);


















