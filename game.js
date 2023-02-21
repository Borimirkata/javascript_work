let canvas=document.getElementById("gameCanvas");
let context=canvas.getContext("2d");
let nx=8;
let ny=8;
let sqside=50;
let herox=0;
let heroy=0;
let gol = document.getElementById("gol");
let result=0;
let coinx=Math.floor(Math.random()*7)+1;
let coiny=Math.floor(Math.random()*7)+1;
let bomb1x=Math.floor(Math.random()*7)+1;
let bomb1y=Math.floor(Math.random()*7)+1;
let bomb2x=Math.floor(Math.random()*7)+1;
let bomb2y=Math.floor(Math.random()*7)+1;
let bomb3x=Math.floor(Math.random()*7)+1;
let bomb3y=Math.floor(Math.random()*7)+1;
let heroimg=new Image();
heroimg.src="hero.png"
canvas.width=nx*sqside;
canvas.height=ny*sqside;
document.getElementById("gol").value=result;
function drawMap() {
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(heroimg,herox*sqside,heroy*sqside,sqside,sqside);
	for(let i=0;i<nx;i++) {
		for(let j=0;j<ny;j++) {
			context.strokeRect(i*sqside,j*sqside,sqside,sqside);
			if(j>0){
				context.fillStyle="brown";
				context.fillRect(i*sqside,j*sqside,sqside,sqside);
			}
			if(coinx==i && coiny==j){
				context.fillStyle="yellow";
				context.fillRect(i*sqside,j*sqside,sqside,sqside);
			}
			if(herox==coinx && heroy==coiny){
				result++;
				document.getElementById("gol").value=result;
				coinx=Math.floor(Math.random()*7)+1;
				coiny=Math.floor(Math.random()*7)+1;
			}
			if(bomb1x==i && bomb1y==j && bomb1x!=coinx && bomb1y!=coiny){
				context.fillStyle="brown";
				context.fillRect(i*sqside,j*sqside,sqside,sqside);
			}
			if(bomb2x==i && bomb2y==j && bomb2x!=coinx && bomb2y!=coiny){
				context.fillStyle="brown";
				context.fillRect(i*sqside,j*sqside,sqside,sqside);
			}
			if(bomb3x==i && bomb3y==j && bomb3x!=coinx && bomb3y!=coiny){
				context.fillStyle="brown";
				context.fillRect(i*sqside,j*sqside,sqside,sqside);
			}
			if((herox==bomb1x && heroy==bomb1y) || (herox==bomb2x && heroy==bomb2y) || (herox==bomb3x && heroy==bomb3y)){
				window.location.reload();
			}
			
			//if(coinx==herox && coiny==heroy){
				//coinx=Math.floor(Math.random()*7)+1;
				//coiny=Math.floor(Math.random()*7)+1;
				//context.fillStyle="yellow";
				//context.fillRect(i*sqside,j*sqside,sqside,sqside);
			//{
		}
	}
	context.drawImage(heroimg,herox*sqside,heroy*sqside,sqside,sqside);
}


drawMap();
//canvas.onclick=function(e){
	//let x=e.x-canvas.offsetLeft;
	//let y=e.y-canvas.offsetTop;
	//herox=Math.floor(x/sqside);
	//heroy=Math.floor(y/sqside);
	//console.log(herox+" "+heroy);
	//drawMap();
//}
UpButton.onclick=function(e){
	herox=herox;
	heroy=heroy-1;
	if(heroy<0){
		heroy=0;
	}
	drawMap();
}
DownButton.onclick=function(e){
	herox=herox;
	heroy=heroy+1;
	if(heroy>=ny){
		heroy=ny-1;
	}
	drawMap();
}
LeftButton.onclick=function(e){
	herox=herox-1;
	heroy=heroy;
	if(herox<0){
		herox=0;
	}
	drawMap();
}
RightButton.onclick=function(e){
	herox=herox+1;
	heroy=heroy;
	if(herox>=nx){
		herox=nx-1;
	}
	drawMap();
}
