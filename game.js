let canvas=document.getElementById("gameCanvas");
let context=canvas.getContext("2d");
let nx=8;
let ny=8;
let sqside=50;
let herox=0;
let heroy=0;
let heroimg=new Image();
heroimg.src="hero.png"
canvas.width=nx*sqside;
canvas.height=ny*sqside;

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
