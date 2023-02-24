let canvas=document.getElementById("gameCanvas");
let hose=document.getElementById("hose");
let hoseValue = hose.value;
let context=canvas.getContext("2d");
let nx=8;
let ny=8;
let sqside=50;
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
let masiv=["kirka","lopata","bomba"];
let hero = {
	x:0,
	y:0
}
console.log(masiv);
heroimg.src="hero.png"
canvas.width=nx*sqside;
canvas.height=ny*sqside;
document.getElementById("gol").value=result;
function drawMap() {
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(heroimg,hero.x*sqside,hero.y*sqside,sqside,sqside);
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
			if(hero.x==coinx && hero.y==coiny){
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
			if((hero.x==bomb1x && hero.y==bomb1y) || (hero.x==bomb2x && hero.y==bomb2y) || (hero.x==bomb3x && hero.y==bomb3y)){
				window.location.reload();
				hose.value="";
				
			}
			if((coinx==bomb1x && coinx==bomb1y) || (coinx==bomb2x && coinx==bomb2y) || (coinx==bomb3x && coinx==bomb3y)){
					coinx=Math.floor(Math.random()*7)+1;
					coiny=Math.floor(Math.random()*7)+1;
			}
			
		}
	}
	context.drawImage(heroimg,hero.x*sqside,hero.y*sqside,sqside,sqside);
}


drawMap();
UpButton.onclick=function(e){
	hero.x=hero.x;
	hero.y=hero.y-1;
	if(hero.y<0){
		hero.y=0;
	}
	drawMap();
}
DownButton.onclick=function(e){
	hero.x=hero.x;
	hero.y=hero.y+1;
	if(hero.y>=ny){
		hero.y=ny-1;
	}
	drawMap();
}
LeftButton.onclick=function(e){
	hero.x=hero.x-1;
	hero.y=hero.y;
	if(hero.x<0){
		hero.x=0;
	}
	drawMap();
}
RightButton.onclick=function(e){
	hero.x=hero.x+1;
	hero.y=hero.y;
	if(hero.x>=nx){
		hero.x=nx-1;
	}
	drawMap();
}
what.onclick=function(e){
	alert("The bombs are not visible.Collect as many coins as posible.If you want to close the window,press the + key.");
}
document.onkeypress=function(e){
	let key=e.key;
	switch(key){
		case"+":
			window.close();
			break;
	}
}

function color(){
	let letter=hose.value.charAt(0);
	if(letter=='a'){
		hose.style.backgroundColor = 'aqua';
	}
	else if(letter=='b'){
		hose.style.backgroundColor = 'blue';
	}
	else if(letter=='c'){
		hose.style.backgroundColor = 'yellow';
	}
	else{
		hose.style.backgroundColor = 'green';
	}
}
change.onclick=function(e){
	color();
}



