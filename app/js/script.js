//Retrieving score and best values if already exists 
var score = parseInt(localStorage.getItem('scorr'));
var best = parseInt(localStorage.getItem('highScore'));


var tileClash= new Array();

//getting stored array(grid values) if stored(already played)
var storedArr = JSON.parse(localStorage.getItem('arr'));


//retrieving & updating score and best values
checkScore();
checkBest();
window.onload = function () {
    restoreGame();
}

//restoring game progress
function restoreGame() {
    //Not at played
    if (storedArr == null) {                        
        document.querySelector('.score_value').textContent = 0;
        score = 0;
        startGame();
    }
    //played and left the game in middle
    else if (storedArr.length != 0){
        restoringStyles();
        createArray();
    }
    else {
        document.querySelector('.score_value').textContent = 0;
        score = 0;
        startGame();
    }
}

//check and display the score,best values if game left in middle
function checkScore() {
    if (isNaN(score)) {
        document.querySelector('.score_value').textContent = 0;
        score = 0;
    }
    else {
        document.querySelector('.score_value').textContent = score;
    }
}
function checkBest() {
    if (isNaN(best)) {
        document.querySelector('.best_value').textContent = 0;
    }
    else {
        document.querySelector('.best_value').textContent = best;
    }
}

function startGame() {
    document.addEventListener("keydown", arrowkeys);
    firstTwoBlocks();
}

function firstTwoBlocks() {
    var first_block = Math.floor(Math.random() * 16);
    var second_block = Math.floor(Math.random() * 16);
    if (first_block == second_block) {
        var second_block = (first_block + 1) % 16;
    }
    document.querySelector('.grid-' + first_block).textContent = 2;
    document.querySelector('.grid-' + second_block).textContent = 2;
    createArray();
}

//creating 4*4 array to store the grid values
var array = [];
var row0 = [];
var row1 = [];
var row2 = [];
var row3 = [];
function createArray() {
    for (var i = 0; i < 4; i++) {
        row0.push(document.querySelector('.grid-' + i).textContent);
    }
    for (var i = 4; i < 8; i++) {
        row1.push(document.querySelector('.grid-' + i).textContent);
    }
    for (var i = 8; i < 12; i++) {
        row2.push(document.querySelector('.grid-' + i).textContent);
    }
    for (var i = 12; i < 16; i++) {
        row3.push(document.querySelector('.grid-' + i).textContent);
    }
    array.push(row0, row1, row2, row3);
    for(var i= 0 ;i<4;i++){
        tileClash[i]=new Array();
        for(var j= 0 ;j<4;j++){
            tileClash[i][j]=false;
        }
    }
    stylingGridItem();
}

function checkBelow(c, r1, r2) {
    for (var i = r1 + 1; i < r2; i++) {
        if (array[c][i] != "") {
            return false;
        }
    }
    return true;
}

function checkAbove(r, c1, c2) {
    for (var i = c1 + 1; i < c2; i++) {
        if (array[i][r] != "") {
            return false;
        }
    }
    return true;
}

function isDMovable(array) {
    for (var i = 2; i >=0 ; i--) {
        for (var j = 0; j < 4; j++) {
            if (array[i][j] !== "") {
                if ((array[i + 1][j] == "") || (array[i + 1][j] == array[i][j])) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isUMovable(array) {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (array[i][j] != "") {
                if ((array[i - 1][j] == "") || (array[i - 1][j]) == (array[i][j])) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isRMovable(array) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (array[i][j] != "") {
                if (array[i][j + 1] == "" || (array[i][j + 1]) == (array[i][j])) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isLMovable(array) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (array[i][j] != "") {
                if (array[i][j - 1] == "" || array[i][j - 1] == array[i][j] ) {
                    return true;
                }
            }
        }
    }
    return false;
}

function emptyTiles(array) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (array[i][j] == "") {
                return false;
            }
        }
    }
    return true;
}

function isMovable() {
    if ((isDMovable(array)) || (isLMovable(array)) || (isRMovable(array)) || (isUMovable(array))) {
        return false;
    }
    return true;
}

function gameOver() {
    if ((isMovable()) && emptyTiles(array)) {
        localStorage.removeItem("arr");
        while (array.length) {
            array.pop();
        }
        while (row0.length) {
            row0.pop();
        }
        while (row1.length) {
            row1.pop();
        }
        while (row2.length) {
            row2.pop();
        }
        while (row3.length) {
            row3.pop();
        }
        gameOverStyles();
        document.removeEventListener("keydown", arrowkeys);
        return true;
    }
}

var gameWin = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if(storedArr[i][j] == 2048){
                        restoringStyles();
                    }
                    else if (array.length!=0) {
                        if(array[i][j] == 2048){
                            gameWinStyles();
                        }
                       
                    }
                    
                }
            }
        }
    };
})();


function moveDown() {
    var done = 0;
    for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
            if (array[i][j] != "") {
                for (var k = 3; k > i; k--) {
                    if (array[k][j] == "" && checkAbove(j, i, k)) {
                        array[k][j] = array[i][j];
                        document.querySelector('#grid-' + k + '-' + j).textContent = array[i][j];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                    }
                    else if (array[k][j] == array[i][j] && checkAbove(j, i, k) && !tileClash[k][j]) {
                        array[k][j] = 2 * array[i][j];
                        document.querySelector('#grid-' + k + '-' + j).textContent = array[k][j];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                        tileClash[k][j]=true;
                        score += array[k][j];
                        document.querySelector('.score_value').textContent = score;
                        bestScore();
                        break;
                    }
                }
            }
        }
    }
    stylingGridItem();
    if (done == 1) {
        createNewGrid();
    }
    gameOver();
    localStorage.setItem("arr", JSON.stringify(array));
    setToFalse();
}

function moveUp() {
    var done = 0;
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (array[i][j] != "") {
                for (var k = 0; k < i; k++) {
                    if (array[k][j] == "" && checkAbove(j, k, i)) {
                        array[k][j] = array[i][j];
                        document.querySelector('#grid-' + k + '-' + j).textContent = array[i][j];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                    }
                    else if (array[k][j] == array[i][j] && checkAbove(j, k, i)&& !tileClash[k][j]) {
                        array[k][j] = 2 * array[i][j];
                        document.querySelector('#grid-' + k + '-' + j).textContent = array[k][j];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                        tileClash[k][j]=true;
                        score += array[k][j];
                        document.querySelector('.score_value').textContent = score;
                        bestScore();
                        break;
                    }
                }
            }
        }
    }
    stylingGridItem();
    if (done == 1) {
        createNewGrid();
    }
    gameOver();
    localStorage.setItem("arr", JSON.stringify(array));
    setToFalse();
}

function moveLeft() {
    var done = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (array[i][j] != "") {
                for (var k = 0; k < j; k++) {
                    if (array[i][k] == "" && checkBelow(i, k, j)) {
                        array[i][k] = array[i][j];
                        document.querySelector('#grid-' + i + '-' + k).textContent = array[i][j];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                    }
                    else if (array[i][k] == array[i][j] && checkBelow(i, k, j)&&!tileClash[i][k]) {
                        array[i][k] = 2 * array[i][j];
                        document.querySelector('#grid-' + i + '-' + k).textContent = array[i][k];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                        tileClash[i][k]=true;
                        score += array[i][k];
                        document.querySelector('.score_value').textContent = score;
                        bestScore();
                        break;
                    }
                }
            }
        }
    }
    stylingGridItem();
    if (done == 1) {
        createNewGrid();
    }
    gameOver();
    localStorage.setItem("arr", JSON.stringify(array));
    setToFalse();
}

function moveRight() {
    var done = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (array[i][j] != "") {
                for (var k = 3; k > j; k--) {
                    if (array[i][k] == "" && checkBelow(i, j, k)) {
                        array[i][k] = array[i][j];
                        document.querySelector('#grid-' + i + '-' + k).textContent = array[i][j];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                    }
                    else if (array[i][k] == array[i][j] && checkBelow(i, j, k) && !tileClash[i][k]) {
                        array[i][k] = 2 * array[i][j];
                        document.querySelector('#grid-' + i + '-' + k).textContent = array[i][k];
                        document.querySelector('#grid-' + i + '-' + j).textContent = "";
                        array[i][j] = "";
                        done = 1;
                        tileClash[i][k]=true;
                        score += array[i][k];
                        document.querySelector('.score_value').textContent = score;
                        bestScore();
                        break;
                    }
                }
            }
        }
    }
    stylingGridItem();
    if (done == 1) {
        createNewGrid();
    }
    gameOver();
    localStorage.setItem("arr", JSON.stringify(array));
    setToFalse();
}

function setToFalse(){
    for(var i= 0 ;i<4;i++) {
        for (var j = 0; j < 4; j++) {
            tileClash[i][j]=false;
        }
    }
}

function bestScore() {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("scorr", document.querySelector('.score_value').textContent);
        localStorage.setItem("highScore", document.querySelector('.best_value').textContent);
        var bestValue = parseInt(localStorage.getItem("highScore"));
        var scoreValue = parseInt(localStorage.getItem("scorr"));
        if (scoreValue < bestValue) {
            document.querySelector('.best_value').textContent = bestValue;
        }
        else if (scoreValue > bestValue) {
            document.querySelector('.best_value').textContent = scoreValue;
        }
        localStorage.setItem("scorr", document.querySelector('.score_value').textContent);
        localStorage.setItem("highScore", document.querySelector('.best_value').textContent);
    }
    else {
        console.log("your browser does not support Web Storage!!!!!");
    }
}

function createNewGrid() {
    
    var row = Math.floor(Math.random() * 4);
    var col = Math.floor(Math.random() * 4);
    if (array[row][col] == "") {
        var newGridVal = Math.random() < 0.8 ? 2 : 4;
        array[row][col] = newGridVal;
        document.querySelector('#grid-' + row + '-' + col).textContent = newGridVal;
    }
    else if (array[row][col] != "") {
        createNewGrid();
    }
    else {
        return false;
    }
    stylingGridItem();
}

function arrowkeys(e) {
    if (e.keyCode === 37) {
        keyLeft()
    } else if (e.keyCode === 38) {
        keyUp()
    } else if (e.keyCode === 39) {
        keyRight()
    } else if (e.keyCode === 40) {
        keyDown()
    }
    else {
        return;
    }
    e.preventDefault();
}
document.addEventListener("keydown", arrowkeys);

function keyDown() {
    moveDown();
}

function keyUp() {
    moveUp();
}

function keyLeft() {
    moveLeft();
}

function keyRight() {
    moveRight();
}

function renewedGame(){
    var button = document.querySelector('.button');
    button.style.visibility = 'hidden';
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            document.querySelector('#grid-' + i + '-' + j).textContent = "";
            stylingGridItem();
        }
    }
    var remove = document.querySelector('.gameOver');
    var removed = document.querySelector('.textOverGrid');
    document.querySelector('.textOverGrid').textContent = "";
    remove.removeAttribute("style");
    removed.removeAttribute("style");
    document.querySelector('.score_value').textContent = 0;
    score = 0;
    startGame();
}

function newGame() {
    var button = document.querySelector('.button');
    button.style.visibility = 'hidden';
    var buttonn = document.querySelector('.buttonn');
    buttonn.style.visibility = 'hidden';
    localStorage.removeItem("scorr");
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            document.querySelector('#grid-' + i + '-' + j).textContent = "";
            stylingGridItem();
        }
    }
    while (array.length) {
        array.pop();
    }
    while (row0.length) {
        row0.pop();
    }
    while (row1.length) {
        row1.pop();
    }
    while (row2.length) {
        row2.pop();
    }
    while (row3.length) {
        row3.pop();
    }

    localStorage.removeItem('arr');
    document.querySelector('.score_value').textContent = 0;
    score = 0;
    removeStyles();
    startGame();
}


