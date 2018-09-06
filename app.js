
// console.log('connected');


const topB = document.getElementById('top');
const leftB = document.getElementById('left');

const rightB = document.getElementById('right');
const bottomB = document.getElementById('bottom');


let ball = document.querySelector('.ball');

let x = 0;
let y = 0;

let movingBallRight = function () {
    if (x>=480){
        console.log('go back');
        
    }else{
        x = x + 10;
        ball.style.left = `${x}px`;
    }
}

let movingBallLeft = function () {
    if (x<=0){
        console.log('go back');
        
    }else{
        x = x - 10;
        ball.style.left = `${x}px`;
    }
}

let movingBallTop = function () {
    if (y<=0){
        console.log('go back');
        
    }else{
        y = y - 10;
        ball.style.top = `${y}px`;
    }
}

let movingBallBottom = function () {
    if (y>=480){
        console.log('go back');
        
    }else{
        y = y + 10;
        ball.style.top = `${y}px`;
    }
}


rightB.addEventListener('click', movingBallRight);
leftB.addEventListener('click', movingBallLeft);

topB.addEventListener('click', movingBallTop);
bottomB.addEventListener('click', movingBallBottom);