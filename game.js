//declaração de variáveis
	var canvas;
	var canvasCont;
	var ballX = 50;
	//O que ocorrerá quando a página iniciar
	function startAnimation()
	{
		canvas = document.getElementById('gameCanvas');
		canvasCont = canvas.getContext('2d');
		var framesPerSecond = 60;
		var timer = setInterval(move, 1000/framesPerSecond);
	}
	window.onload = function () 
	{
		canvas = document.getElementById('gameCanvas');
		canvasCont = canvas.getContext('2d');
		canvasCont.fillStyle = 'black';
		canvasCont.fillRect(0, 0, canvas.width, canvas.height);
		/*var framesPerSecond = 60;
		var timer = setInterval(move, 1000/framesPerSecond);
		*/	
	}
	/*function move(item, xPos, yPos, ammount)
	{
		
	}*/
	function move()
	{
		ballX += 5;
		console.log(ballX);
		canvasCont.fillStyle = 'black';
		canvasCont.fillRect(0, 0, canvas.width, canvas.height);
		canvasCont.fillStyle = 'white';
		canvasCont.fillRect(ballX, ballX, 100, 100);
		if (ballX === 500)
		{	
			console.log("Loop end!!!");
			console.log("Loop end!!!");
			console.log("Loop end!!!");
			ballX = 50;
		}
		else if (what === false)
		{
			clearInterval();
		}
	}