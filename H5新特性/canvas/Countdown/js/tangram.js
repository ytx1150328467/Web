var data=[

        	{p:[{"x":0,"y":0},{"x":800,"y":0},{"x":400,"y":400}], color:"#caff67"},

        	{p:[{"x":0,"y":0},{"x":400,"y":400},{"x":0,"y":800}], color:"#67becf"},

        	{p:[{"x":800,"y":0},{"x":800,"y":400},{"x":600,"y":600},{"x":600,"y":200}], color:"#ef3d61"},

        	{p:[{"x":600,"y":200},{"x":600,"y":600},{"x":400,"y":400}], color:"#f9f51a"},

        	{p:[{"x":400,"y":400},{"x":600,"y":600},{"x":400,"y":800},{"x":200,"y":600}], color:"#a594c0"},

        	{p:[{"x":200,"y":600},{"x":400,"y":800},{"x":0,"y":800}], color:"#fa8ecc"},

        	{p:[{"x":800,"y":400},{"x":800,"y":800},{"x":400,"y":800}], color:"#f6ca29"},

]
window.onload =function(){
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 600;


var ctx = canvas.getContext("2d");
for(var i=0;i<data.length;i++){
  draw(data[i],ctx);
}
//绘制 start；
function draw(piece,context){
  context.beginPath();
  context.moveTo(piece.p[0].x,piece.p[0].y);
  // for(var i = 1;i<piece.p.length;i++){
  //   context.lineTo(piece.p[i].x,piece.p[i].y);
  // }
  for(var i = 1;i<piece.p.length;i++){
    context.lineTo(piece.p[i].x,piece.p[i].y);
  };
context.closePath();
context.fillStyle = piece.color;
context.lineWidth = 3;
context.stroke();
context.fill();
}


}
