
// console.log('connected');


const topB = document.getElementById('top');
const leftB = document.getElementById('left');
const rightB = document.getElementById('right');
const bottomB = document.getElementById('bottom');


let ball = document.querySelector('.ball');

let x = 0;
let y = 0;

const gameover =  () => console.log('Game Over');

let movingBallRight = function () {
    if (x>=280){
        gameover()    
    }else{
        x = x + 20;
        ball.style.left = `${x}px`;
    }
}

let movingBallLeft = function () {
    if (x<=0){
        gameover()    
    }else{
        x = x - 20;
        ball.style.left = `${x}px`;
    }
}

let movingBallTop = function () {
    if (y<=0){
        gameover()    
    }else{
        y = y - 20;
        ball.style.top = `${y}px`;
    }
}

let movingBallBottom = function () {
    if (y>=280){
        gameover()    
    }else{
        y = y + 20;
        ball.style.top = `${y}px`;
    }
}


leftB.addEventListener('click', movingBallLeft);
topB.addEventListener('click', movingBallTop);
rightB.addEventListener('click', movingBallRight);
bottomB.addEventListener('click', movingBallBottom);


















