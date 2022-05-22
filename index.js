var c=document.getElementById("fv");
var ctx=c.getContext('2d');
var pac=document.getElementById("pls")
var grd=ctx.createRadialGradient(70,50,5,90,60,100);
grd.addColorStop(0,"green");
grd.addColorStop(1,"#d6e7ff")

ctx.fillStyle=grd;
ctx.fillRect(10,10,190,80);
ctx.font="50px Arial";
ctx.strokeText("Dexter",15,60);
