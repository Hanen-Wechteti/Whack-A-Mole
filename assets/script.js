let currMoleTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    // set up the grid for the game board in html
    for ( let i = 0; i < 9; i++) {
        if ( gameOver) {
            return;
        }
        let tile =document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener('click', selectTile);
        document.getElementById('board').appendChild(tile);
    }
    setInterval(setMole, 2000);
}


function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if ( gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement('img');
    mole.src = "assets/mole.png"

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function selectTile() {
    if ( gameOver) {
        return;
    }
    if ( this == currMoleTile) {
        score += 10;
        document.getElementById('score').innerText = score.toString(); //update the score
    }
        else{
            document.getElementById('score').innerText = "GAME OVER: " + score.toString()
        gameOver = true; 

    }
}

