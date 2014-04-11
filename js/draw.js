var canvas = document.getElementById("crossandcircle"),
ctx = canvas.getContext("2d");
canvas.width = canvas.height = 200;


var circleCross = ['o','x'];

var board = [[40,40,null],[100,40,null],[160,40,null],
             [40,100,null],[100,100,null],[160,100,null],
             [40,160,null],[100,160,null],[160,160,null]];



var a =  Math.floor(Math.random() * 9);
//var b =  Math.floor(Math.random() * 3);
var b =  Math.floor(Math.random() * 2);

var youFigure = Math.abs(b-1);




//alert(board[a][b]);
//
//
//if(board[1][0] === 0){
//	alert(board[1][0]);
//}




ctx.strokeStyle = "#003300";
ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(60+10, 10);
ctx.lineTo(60+10, 190);
ctx.stroke();
ctx.moveTo(60+60+10, 10);
ctx.lineTo(60+60+10, 190);
ctx.stroke();
ctx.moveTo(10, 60+10);
ctx.lineTo(190, 60+10);
ctx.stroke();

ctx.moveTo(10, 60+60+10);
ctx.lineTo(190, 60+60+10);
ctx.stroke();

board[a][2] = circleCross[b];

//alert(board[a][2]);
//alert(board[2][2]);

if(circleCross[b] == 'o'){
	drawCircle(ctx,board[a][0],board[a][1]);
}else if(circleCross[b] == 'x'){
	drawCross(ctx,board[a][0],board[a][1]);
}

//drawCross(ctx,40,40);
//
//drawCircle(ctx,100,100);
////drawCircle(ctx,160,160);
//
//drawCircle(ctx,40,100);
//drawCircle(ctx,40,160);
//
//drawCircle(ctx,100,40);
//drawCircle(ctx,100,160);
//
//drawCircle(ctx,160,40);
//drawCircle(ctx,160,100);




//ctx.moveTo(40, 40);
//ctx.beginPath();
//ctx.arc(40, 40, 20, 0, Math.PI*2 , false);
//ctx.stroke();


//ctx.moveTo(100, 100);
//ctx.beginPath();
//ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
////ctx.fillStyle = 'green';
////ctx.fill();
//ctx.lineWidth = 5;
//ctx.strokeStyle = 'red';


ctx.closePath();
ctx.stroke();

function drawCircle(ctx,x,y){
	ctx.lineWidth = 5;
	ctx.moveTo(x, y);
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
	ctx.stroke();
}


function drawCross(ctx,x,y){
	ctx.lineWidth = 5;
	ctx.moveTo(x, y);
	ctx.lineTo(x+16, y+16);
	ctx.moveTo(x, y);
	ctx.lineTo(x-16, y-16);
	ctx.moveTo(x, y);
	ctx.lineTo(x+16, y-16);
	ctx.moveTo(x, y);
	ctx.lineTo(x-16, y+16);
	ctx.stroke();
}



function getMousePos(ctx, evt) {
    var rect = ctx.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }




//canvas.addEventListener('mousemove', function(evt) {
//    var mousePos = getMousePos(canvas, evt);
//    var message = 'Mouse:' + mousePos.x + ',' + mousePos.y;
//    ctx.clearRect(0, 0, 200, 50);
//    ctx.font = '18pt Calibri';
//    ctx.fillStyle = 'black';
//    ctx.fillText(message, 10, 25);
//  }, false);

function drawComputerFigure(){
	var a =  Math.floor(Math.random() * 9);
	while(board[a][2] != null){
		 a =  Math.floor(Math.random() * 9);
	}
	if(circleCross[b]=='o'){
		drawCircle(ctx,board[a][0],board[a][1]);
	}else{
		drawCross(ctx,board[a][0],board[a][1]);
	}
	board[a][2] = circleCross[b];
}


function drawYourFigure(number){
	if(board[number][2]==null){
		if(circleCross[youFigure]=='o'){
			
			drawCircle(ctx,board[number][0],board[number][1]);
			
		}else{
			drawCross(ctx,board[number][0],board[number][1]);
			
		}
		board[number][2] = circleCross[youFigure];
		drawComputerFigure();
	}
}

canvas.addEventListener('click', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	
	
	if(mousePos.x>133 && mousePos.y>133){
		//3,3
		drawYourFigure(8);
		
	}
	
	
	if((mousePos.x > 73 && mousePos.x < 133 ) && mousePos.y > 133){
		//3,2
		//drawCircle(ctx,160,160);
		drawYourFigure(7);
		//drawCircle(ctx,100,160);
	}
	
	
	if(mousePos.x < 68  && mousePos.y > 133){
		//3,1
		//drawCircle(ctx,160,160);
		drawYourFigure(6);
		//drawCircle(ctx,40,160);
	}
	
	
	if(mousePos.x < 68  &&    mousePos.y >73 && mousePos.y < 127 ){
		//2,1
		//drawCircle(ctx,160,160);
		drawYourFigure(3);
		//drawCircle(ctx,40,100);
	}
	
	
	if( mousePos.x > 73 && mousePos.x < 133  && mousePos.y >73 && mousePos.y < 127 ){
		//2,2
		//drawCircle(ctx,160,160);
		drawYourFigure(4);
		//drawCross(ctx,100,100);
	}
	
	
	if( mousePos.x > 133  && mousePos.y >73 && mousePos.y < 127 ){
		//2,3
		//drawCircle(ctx,160,160);
		drawYourFigure(5);
		//drawCross(ctx,160,100);
	}
	
	
	
	if(mousePos.x < 68  &&    mousePos.y < 68 ){
		//1,1
		//drawCircle(ctx,160,160);
		drawYourFigure(0);
		//drawCircle(ctx,40,40);
	}
	
	
	
	if(mousePos.x > 73 && mousePos.x < 133  &&    mousePos.y < 68 ){
		//1,2
		//drawCircle(ctx,160,160);
		drawYourFigure(1);
		//drawCircle(ctx,100,40);
	}

	
	if( mousePos.x > 133  &&    mousePos.y < 68 ){
		//1,2
		//drawCircle(ctx,160,160);
		drawYourFigure(2);
		//drawCircle(ctx,160,40);
	}
	
	
},false);



//ctx.fillStyle = "blue";
//ctx.beginPath();
//ctx.arc(50, 50, 10, 0, Math.PI , true);
//ctx.arc(150, 50, 25, 0, Math.PI * 2, true);
//ctx.fill();
//// draw a red triangle
//ctx.fillStyle = "red";
//ctx.beginPath();
//ctx.moveTo(100, 75);
//ctx.lineTo(75, 125);
//ctx.lineTo(125, 125);
//ctx.fill();
//// draw a green semi-circle
//ctx.strokeStyle = "green";
//ctx.beginPath();
//ctx.scale(1, 0.5);
//ctx.arc(100, 300, 75, Math.PI, 0, true);
//ctx.closePath();
//ctx.stroke();