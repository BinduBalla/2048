function stylingGridItem() {
    for (var i = 0; i < 16; i++) {
        var gridItems = document.querySelector('.grid-' + i);
        if (document.querySelector('.grid-' + i).textContent == "") {
            gridItems.removeAttribute("style");
        }
        else if (document.querySelector('.grid-' + i).textContent == "2") {
            gridItems.style.background = '#eee4da';
            gridItems.style.color = '#776e65';
            gridItems.style.fontSize = '70px';
            gridItems.style.padding = '35px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "4") {
            gridItems.style.background = '#ede0c8';
            gridItems.style.color = '#776e65';
            gridItems.style.fontSize = '70px';
            gridItems.style.padding = '35px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "8") {
            gridItems.style.background = '#f2b179';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '70px';
            gridItems.style.padding = '35px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "16") {
            gridItems.style.background = '#f59563';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '55px';
            gridItems.style.padding = '37px 25px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "32") {
            gridItems.style.background = '#f67c5f';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '55px';
            gridItems.style.padding = '37px 25px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "64") {
            gridItems.style.background = '#f65e3b';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '55px';
            gridItems.style.padding = '37px 25px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "128") {
            gridItems.style.background = '#edcf72';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '50px';
            gridItems.style.padding = '37px 15px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "256") {
            gridItems.style.background = '#edcc61';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '50px';
            gridItems.style.padding = '37px 15px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "512") {
            gridItems.style.background = '#edc850';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '50px';
            gridItems.style.padding = '37px 15px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "1024") {
            gridItems.style.background = '#edc53f';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '40px';
            gridItems.style.padding = '36px 12px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (document.querySelector('.grid-' + i).textContent == "2048") {
            gridItems.style.background = '#edc22e';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '40px';
            gridItems.style.padding = '36px 12px';
            gridItems.style.fontWeight = 'bold';
            gameWin();
        }
        else if (document.querySelector('.grid-' + i).textContent == "4096" ||
            document.querySelector('.grid-' + i).innerHTML == "8192") {
            gridItems.style.background = '#2a4347';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '40px';
            gridItems.style.padding = '36px 12px';
            gridItems.style.fontWeight = 'bold';
        }
        else if (
            document.querySelector('.grid-' + i).innerHTML == "16384" ||
            document.querySelector('.grid-' + i).innerHTML == "32768" ||
            document.querySelector('.grid-' + i).innerHTML == "65536" ||
            document.querySelector('.grid-' + i).innerHTML == "131072") {
            gridItems.style.background = ' #2a4347';
            gridItems.style.color = '#f9f6f2';
            gridItems.style.fontSize = '10px';
            gridItems.style.padding = '20px 10px';
            gridItems.style.fontWeight = 'bold';
        }
    }
    
}


function restoringStyles() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (storedArr[i][j] == "") {
                document.querySelector('#grid-' + i + '-' + j).textContent = "";
            }
            else if (storedArr[i][j] == 2) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "2";
            }
            else if (storedArr[i][j] == 4) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "4";
            }
            else if (storedArr[i][j] == 8) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "8";
            }
            else if (storedArr[i][j] == 16) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "16";
            }
            else if (storedArr[i][j] == 32) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "32";
            }
            else if (storedArr[i][j] == 64) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "64";
            }
            else if (storedArr[i][j] == 128) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "128";
            }
            else if (storedArr[i][j] == 256) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "256";
            }
            else if (storedArr[i][j] == 512) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "512";
            }
            else if (storedArr[i][j] == 1024) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "1024";
            }
            else if (storedArr[i][j] == 2048) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "2048";
            }
            else if (storedArr[i][j] == 4096) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "4096";
            }
            else if (storedArr[i][j] == 8192) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "8192";
            }
            else if (storedArr[i][j] == 16384) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "16384";
            }
            else if (storedArr[i][j] == 32768) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "32768";
            }
            else if (storedArr[i][j] == 65536) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "65536";
            }
            else if (storedArr[i][j] == 131072) {
                document.querySelector('#grid-' + i + '-' + j).textContent = "131072";
            }
        }
    }
    stylingGridItem();
}



function gameWinStyles() {
    var grid = document.querySelector('.textOverGrid');
    var gameEnd = document.querySelector('.gameOver');
    var button = document.querySelector('.buttonn');
    grid.textContent = 'You Win!!!';
    grid.style.fontSize = '50px';
    gameEnd.style.background = 'rgba(237,194,46,0.3)';
    grid.style.fontWeight = 'bold';
    button.style.visibility = 'visible';
}

function removeStyles() {
    var removeStyle = document.querySelector('.gameOver');
    var removingStyle = document.querySelector('.textOverGrid');
    document.querySelector('.textOverGrid').textContent = "";
    removeStyle.removeAttribute("style");
    removingStyle.removeAttribute("style");
    var button = document.querySelector('.buttonn');
    button.style.visibility = 'hidden';
}


function gameOverStyles() {
    var grid = document.querySelector('.textOverGrid');
    var gameEnd = document.querySelector('.gameOver');
    var button = document.querySelector('.button');
    grid.textContent = 'Game Over!';
    grid.style.fontSize = '40px';
    gameEnd.style.background = 'rgba(238,228,218,0.4)';
    grid.style.fontWeight = 'bold';
    button.style.visibility = 'visible';
}