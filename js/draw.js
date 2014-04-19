var canvas = document.getElementById("crossandcircle"),
    ctx = canvas.getContext("2d");
canvas.width = canvas.height = 200;


var circleCross = ['o', 'x'];

var finishGame = false;
var win =null;


var board = [
    [40, 40, null],
    [100, 40, null],
    [160, 40, null],
    [40, 100, null],
    [100, 100, null],
    [160, 100, null],
    [40, 160, null],
    [100, 160, null],
    [160, 160, null]
];

function initBoard() {
    board = [
        [40, 40, null],
        [100, 40, null],
        [160, 40, null],
        [40, 100, null],
        [100, 100, null],
        [160, 100, null],
        [40, 160, null],
        [100, 160, null],
        [160, 160, null]
    ];
}

var a, b, youFigure;
function generatePositionAndFigure() {
    a = Math.floor(Math.random() * 9);
    b = Math.floor(Math.random() * 2);
    youFigure = Math.abs(b - 1);

}


function checkFinishAndWhoWin() {
    if (getResult(board[0][2], board[3][2], board[6][2])) {
        win = board[0][2];
        finishGame = true;
        return true;
    }

    if (getResult(board[1][2], board[4][2], board[7][2])) {
        win =  board[1][2];
        finishGame = true;
        return true;

    }

    if (getResult(board[2][2], board[5][2], board[8][2])) {
        win = board[2][2];
        finishGame = true;
        return true;

    }


    if (getResult(board[0][2], board[1][2], board[2][2])) {
        win = board[0][2];
        finishGame = true;
        return true;

    }

    if (getResult(board[3][2], board[4][2], board[5][2])) {
        win = board[3][2];
        finishGame = true;
        return true;

    }

    if (getResult(board[6][2], board[7][2], board[8][2])) {
        win = board[6][2];
        finishGame = true;
        return true;

    }

    if (getResult(board[0][2], board[4][2], board[8][2])) {
        win = board[0][2];
        finishGame = true;
        return true;

    }

    if (getResult(board[2][2], board[4][2], board[6][2])) {
        win = board[2][2];
        finishGame = true;
        return true;

    }
    return false;
}

function getResult(x, y, z) {
    if (x !== null && y !== null && z !== null) {
        return x === y ? x === z ? true : false : false;
    } else {
        return false;
    }

}


function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    initBoard();
    finishGame = false;
    ctx.strokeStyle = "#003300";
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(60 + 10, 10);
    ctx.lineTo(60 + 10, 190);
    ctx.stroke();
    ctx.moveTo(60 + 60 + 10, 10);
    ctx.lineTo(60 + 60 + 10, 190);
    ctx.stroke();
    ctx.moveTo(10, 60 + 10);
    ctx.lineTo(190, 60 + 10);
    ctx.stroke();

    ctx.moveTo(10, 60 + 60 + 10);
    ctx.lineTo(190, 60 + 60 + 10);
    ctx.stroke();
    ctx.closePath();
    ctx.stroke();
    generatePositionAndFigure();
    startMove();
}


function startMove() {
    board[a][2] = circleCross[b];
    if (circleCross[b] == 'o') {
        drawCircle(ctx, board[a][0], board[a][1]);
    } else if (circleCross[b] == 'x') {
        drawCross(ctx, board[a][0], board[a][1]);
    }
}


function drawCircle(ctx, x, y) {
    ctx.lineWidth = 5;
    ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
    ctx.stroke();
}


function drawCross(ctx, x, y) {
    ctx.lineWidth = 5;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 16, y + 16);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 16, y - 16);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 16, y - 16);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 16, y + 16);
    ctx.stroke();
}


function getMousePos(ctx, evt) {
    var rect = ctx.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


function drawComputerFigure() {
    var a = Math.floor(Math.random() * 9);
    while (board[a][2] != null) {
        a = Math.floor(Math.random() * 9);
    }
    if (circleCross[b] == 'o') {
        drawCircle(ctx, board[a][0], board[a][1]);
    } else {
        drawCross(ctx, board[a][0], board[a][1]);
    }
    board[a][2] = circleCross[b];
    if(checkFinishAndWhoWin()){
        showWin();
    }

}


function drawYourFigure(number) {
    if (!finishGame) {

        if (board[number][2] == null) {
            if (circleCross[youFigure] == 'o') {
                drawCircle(ctx, board[number][0], board[number][1]);
            } else {
                drawCross(ctx, board[number][0], board[number][1]);
            }
            board[number][2] = circleCross[youFigure];

            if (!checkFinishAndWhoWin()) {
                drawComputerFigure();
            }else{
                showWin();
            }
        }
    }
}

function showWin(){
    if(win==circleCross[youFigure]){
        alert("Wygrales!!!!");
    } else{
        alert("Przegrales");
    }
}

canvas.addEventListener('click', function (evt) {
    var mousePos = getMousePos(canvas, evt);


    if (mousePos.x > 133 && mousePos.y > 133) {
        //3,3
        drawYourFigure(8);

    }


    if ((mousePos.x > 73 && mousePos.x < 133 ) && mousePos.y > 133) {
        //3,2
        //drawCircle(ctx,160,160);
        drawYourFigure(7);
        //drawCircle(ctx,100,160);
    }


    if (mousePos.x < 68 && mousePos.y > 133) {
        //3,1
        //drawCircle(ctx,160,160);
        drawYourFigure(6);
        //drawCircle(ctx,40,160);
    }


    if (mousePos.x < 68 && mousePos.y > 73 && mousePos.y < 127) {
        //2,1
        //drawCircle(ctx,160,160);
        drawYourFigure(3);
        //drawCircle(ctx,40,100);
    }


    if (mousePos.x > 73 && mousePos.x < 133 && mousePos.y > 73 && mousePos.y < 127) {
        //2,2
        //drawCircle(ctx,160,160);
        drawYourFigure(4);
        //drawCross(ctx,100,100);
    }


    if (mousePos.x > 133 && mousePos.y > 73 && mousePos.y < 127) {
        //2,3
        //drawCircle(ctx,160,160);
        drawYourFigure(5);
        //drawCross(ctx,160,100);
    }


    if (mousePos.x < 68 && mousePos.y < 68) {
        //1,1
        //drawCircle(ctx,160,160);
        drawYourFigure(0);
        //drawCircle(ctx,40,40);
    }


    if (mousePos.x > 73 && mousePos.x < 133 && mousePos.y < 68) {
        //1,2
        //drawCircle(ctx,160,160);
        drawYourFigure(1);
        //drawCircle(ctx,100,40);
    }


    if (mousePos.x > 133 && mousePos.y < 68) {
        //1,2
        //drawCircle(ctx,160,160);
        drawYourFigure(2);
        //drawCircle(ctx,160,40);
    }


}, false);

