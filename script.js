const inputA = document.getElementById("InputA");
const inputB = document.getElementById("InputB");
const gol = document.getElementById("gol");
const subButton=document.getElementById("sumButton");
const minButton=document.getElementById("minButton");
const mulButton=document.getElementById("mulButton");
const divButton=document.getElementById("divButton");
const result=document.getElementById("result");
sumButton.onclick=function() {
	const a=Number(inputA.value);
	const b=Number(inputB.value);
	const c=a+b;                        
	document.getElementById("gol").value=c;
}
minButton.onclick=function() {
	const a=Number(inputA.value);
	const b=Number(inputB.value);
	const c=a-b;
	document.getElementById("gol").value=c;                        
}
mulButton.onclick=function() {
	const a=Number(inputA.value);
	const b=Number(inputB.value);
	const c=a*b;
	document.getElementById("gol").value=c;                        
}
divButton.onclick=function() {
	const a=Number(inputA.value);
	const b=Number(inputB.value);
	const c=a/b;
	document.getElementById("gol").value=c;                       
}

