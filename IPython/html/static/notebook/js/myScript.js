/*
  myScript.js handles turtle animation using the canvas tool and the paper.js script
*/


var c = this.document.getElementById('canvas1');
var canvasSize = 401;
document.getElementById("canvas1").style.background =' 	#99CCFF';
paper.setup(c);
var grid = new paper.Path();




// This is water riple stuff.....
/*
  var ca = document.getElementById('canvas1'),
  //@type {CanvasRenderingContext2D} 
  ctx = ca.getContext('2d'),
  width = 401,
  height = 401,
  half_width = width >> 1,
  half_height = height >> 1,
  size = width * (height + 2) * 2,
  delay = 30,
  oldind = width,
  newind = width * (height + 3),
  riprad = 3,
  ripplemap = [],
  last_map = [],
  ripple,
  texture,
  line_width = 40,
  step = line_width * 2, 
  count = height / line_width;
  
  ca.width = width;
  ca.height = height;
  //Water ripple demo can work with any bitmap image
  // (see example here: http://media.chikuyonok.ru/ripple/)
  //But I need to draw simple artwork to bypass 1k limitation
  
  with (ctx) {
  //fillStyle = '#a2ddf8';
  fillRect(0, 0, width, height);
  
  fillStyle = '#07b';
  save();
  rotate(-0.785);
  for (var i = 0; i < count; i++) {
  fillRect(-width, i * step, width * 3, line_width);
  }
  
  restore();
  }
  
  texture = ctx.getImageData(0, 0, width, height);
  ripple = ctx.getImageData(0, 0, width, height);
  
  for (var i = 0; i < size; i++) {
  last_map[i] = ripplemap[i] = 0;
  }
  
  
  function run() {
  newframe();
  ctx.putImageData(ripple, 0, 0);
  }
  
  
  function disturb(dx, dy) {
  dx <<= 0;
  dy <<= 0;
  
  for (var j = dy - riprad; j < dy + riprad; j++) {
  for (var k = dx - riprad; k < dx + riprad; k++) {
  ripplemap[oldind + (j * width) + k] += 128;
  }
  }
  }
  
  
  // Generates new ripples
  
  function newframe() {
  var a, b, data, cur_pixel, new_pixel, old_data;
  
  var t = oldind; oldind = newind; newind = t;
  var i = 0;
  
  // create local copies of variables to decrease
  // scope lookup time in Firefox
  var _width = width,
  _height = height,
  _ripplemap = ripplemap,
  _last_map = last_map,
  _rd = ripple.data,
  _td = texture.data,
  _half_width = half_width,
  _half_height = half_height;
  
  for (var y = 0; y < _height; y++) {
  for (var x = 0; x < _width; x++) {
  var _newind = newind + i, _mapind = oldind + i;
  data = (
  _ripplemap[_mapind - _width] + 
  _ripplemap[_mapind + _width] + 
  _ripplemap[_mapind - 1] + 
  _ripplemap[_mapind + 1]) >> 1;
  
  data -= _ripplemap[_newind];
  data -= data >> 5;
  
  _ripplemap[_newind] = data;

  //where data=0 then still, where data>0 then wave
  data = 1024 - data;
  
  old_data = _last_map[i];
  _last_map[i] = data;
  
  if (old_data != data) {
  //offsets
  a = (((x - _half_width) * data / 1024) << 0) + _half_width;
  b = (((y - _half_height) * data / 1024) << 0) + _half_height;
  
  //bounds check
  if (a >= _width) a = _width - 1;
  if (a < 0) a = 0;
  if (b >= _height) b = _height - 1;
  if (b < 0) b = 0;
  
  new_pixel = (a + (b * _width)) * 4;
  cur_pixel = i * 4;
  
  _rd[cur_pixel] = _td[new_pixel];
  _rd[cur_pixel + 1] = _td[new_pixel + 1];
  _rd[cur_pixel + 2] = _td[new_pixel + 2];
  }
  
  ++i;
  }
  }
  }

  setInterval(run, delay);
*/
	    
/* adds grid for user to turn off / on, helps see what the turtle
   is doing */
document.getElementById('grid-element').onclick = function(){
    
    if(document.getElementById('grid-element').value=="OFF"){
	document.getElementById('grid-element').value="ON";
	grid.strokeColor = 'grey';
	var start = new paper.Point(1,1);
	grid.moveTo(start);
	grid.lineTo(start.add([0,canvasSize]));
	
	for(var i = 20; i <= canvasSize; i += 20){
	    grid.lineTo(start.add([i,canvasSize]));
	    grid.lineTo(start.add([i,0]));
	    grid.lineTo(start.add([i+20,0]));
	}
	for(var i = 20; i <= canvasSize; i += 20){
	    grid.lineTo(start.add([canvasSize,i]));
	    grid.lineTo(start.add([0,i]));
	    grid.lineTo(start.add([0,i+20]));
	}
	paper.view.draw();
    }
    else{
	document.getElementById('grid-element').value="OFF";
	grid.clear();
	paper.view.draw();
    }
}

document.getElementById('help-element').onclick = function (){
    alert("example:\nfrom NewTurtle import Turtle\nt = Turtle()\nt.forward(50)\nfor help:\nhelp(Turtle)");
}
/*
  getValue splits up the string with any turtle infromation, breaks it up 
  into points which have an x, y and b value. It is called 6 times for every turtle command entered (once for each new and old point value). Count is itterated for 
  turtle command entered. The count argument should tell the function which turtle 
  command you want information about, the coord argument should specify which or the 6 possible pieces of information about each command you're looking for.
*/
function getValue(count,coord){
    var d = ($(".turtle-coordinates")).text().replace(/\n/g, ",").split(",");
    var p;
    var lc;
    var x;
    var y;
	var s;

    var wCoord = coord;

    var points = [{p:1, lc:"black", x:200, y:200, b:0, s:1}];
    var wCount = count;
	
    for(i = 0; i < d.length ; i+=6){
	
	p = parseInt(d[i]);
	
	lc = d[i+1];
	x = parseInt(d[i+2]);   
	y = parseInt(d[i+3]);
	b = parseInt(d[i+4]);	
	s = parseInt(d[i+5]);
	
	points.push ({p:p, lc:lc, x:x, y:y, b:b, s:s});	
    }
    
    if(coord == 1){
	return oldPen = points[wCount].p;
    }
    else if(coord == 2){
	return oldColour = points[wCount].lc;
    }   
    else if(coord == 3){
	return 	oldX = points[wCount].x;
    }
    else if(coord == 4){
	return 	oldY = points[wCount].y;
    }
    else if(coord == 5){
	return 	oldRotation = points[wCount].b;
    }
	else if(coord == 6){
	return 	turtleSpeed = points[wCount].s;
    }
    else if(coord == 7){
	return newPen = points[wCount+1].p;
    }
    else if(coord == 8){
	return newColour = points[wCount+1].lc;
    }
    else if(coord == 9){
	return 	newX = points[wCount+1].x;
    }
    else if(coord == 10){
	return 	newY = points[wCount+1].y;
    }
    else if(coord == 11){
	return 	newRotation = points[wCount+1].b;
    }
	else if(coord == 12){
	return 	turtleSpeed = points[wCount+1].s;
    }		
}	
// some variable to play with still

var lineSize = 2;
var rotateSpeed = 1;
var turtleColour ='#006900' ;
var turtleShow = 1;


// onFrame variables
var oldPen;
var oldX;
var oldY;
var oldRotation;
var oldColour;
var newPen;
var newX; 
var newY;
var newRotation;
var newColour;
var veryOldX;
var veryOldY;
var turtleSpeed;

// counts each turtle command
var count = 0;
var changRot;


// initial function call
nextCount();

/* 
   nextCount is the first function to run for each turtle command. It sets the 
   global variables to each of the values pulled from the intial string.
*/
function nextCount(){
    oldPen = getValue(count, 1);
    oldColour = getValue(count, 2);
    oldX = getValue(count,3);
    oldY = getValue(count,4);
    oldRotation = getValue(count,5);
	turtleSpeed =  getValue(count,6);
    newPen = getValue(count, 7);
    newColour = getValue(count, 8);
    newX = getValue(count,9);
    newY = getValue(count,10);
    changRot = getValue(count,11);
	turtleSpeed = getValue(count,12);
    count++;
	veryOldX =oldX;
	veryOldY =oldY;
//path.add(new paper.Point(veryOldX, veryOldY));

	if(newPen!=oldPen || newColour != oldColour){
		path = new paper.Path();
		path.strokeWidth = 3;
	
   	path.add(new paper.Point(oldX, oldY));
	}

    // Good test command to see what the input is from the string
    // alert("old:"+oldX +" "+ oldY + " " + oldRotation + " New:" + newX + " " +newY + " " + newRotation+ " " + turtleSpeed);

}
var path;
path = new paper.Path();
path.strokeWidth = 3;

path.add(new paper.Point(veryOldX, veryOldY));
//builds the initial turtle icon
if(turtleShow==1){
    var tail = new paper.Path.RegularPolygon(new paper.Point(oldX-11,oldY), 3, 3);
    tail.rotate(30);
    tail.fillColor = turtleColour;

    var circlePoint = new paper.Point(oldX, oldY);

    var circle1 = new paper.Path.Circle(circlePoint, 10);
    circle1.fillColor = turtleColour;

    var circlePoint = new paper.Point(oldX+7, oldY-10);

    var circle2 = new paper.Path.Circle(circlePoint, 3);
    circle2.fillColor = turtleColour;

    var circlePoint = new paper.Point(oldX-7, oldY+10);

    var circle3 = new paper.Path.Circle(circlePoint, 3);
    circle3.fillColor = turtleColour;

    var circlePoint = new paper.Point(oldX+7, oldY+10);

    var circle4 = new paper.Path.Circle(circlePoint, 3);
    circle4.fillColor = turtleColour;

    var circlePoint = new paper.Point(oldX-7, oldY-10);

    var circle5 = new paper.Path.Circle(circlePoint, 3);
    circle5.fillColor = turtleColour;

    var circlePoint = new paper.Point(oldX+10, oldY);

    var circle6 = new paper.Path.Circle(circlePoint, 5);
    circle6.fillColor = turtleColour;

	var turtle = new paper.Group([circle1,circle2,circle3,circle4,circle5,circle6,tail]);
     paper.view.draw;
}
/*
  The onFrame function does all the drawing, its called every frame at roughly
  30-60fps
*/




paper.view.onFrame = function(event) { 

 


    var changX =Math.abs(oldX-newX);
    var changY =Math.abs(oldY-newY);


    //This is for ripple effect...
   // disturb(oldX, oldY);


    // the frame variables outline how much in which direction, this allows
    // the turtle to take the shortest route
    var frameX;
    var frameY;
    // can't devide by 0, no need for frame calculation anyway if there's 
    // no change in one direction
    if ((changY ==0 || changX ==0)){
	frameY = 1;
	frameX = 1;	
    }
    // make ratio for Y
    else if (changX < changY){
	frameX = (changX/changY);
	frameY = 1;
    }
    // make ratio for X
    else{
	frameY = (changY/changX);
	frameX = 1;	
    }
var speedCount = 0;
while(speedCount<turtleSpeed){
speedCount++;
    //rotate turtle, current is the exact centre of the turtle
    if (  changRot != 0 && turtleShow==1){
	var current = new paper.Point(oldX, oldY);
	
	if(changRot < 0){		
	    
	    changRot += rotateSpeed;
	    turtle.rotate(-rotateSpeed,current);
	   

	}
	if(changRot > 0){

	    changRot -= rotateSpeed;
	    turtle.rotate(rotateSpeed,current);		
	   
	}
    }
    //if turtle is off we have to manually set old rotation	
    else{
	oldRotation = newRotation;
    }
    if (newX > oldX){
	oldX += frameX;
	if(turtleShow==1){
	    turtle.translate(frameX,0);
	   
	}
    }
    if (newY > oldY){
	oldY += frameY;
	if(turtleShow==1){
	    turtle.translate(0,frameY);
	  
	}
	
    }

    if (newX < oldX){
	oldX -= frameX;
	if(turtleShow==1){
	    turtle.translate(-frameX,0);
	   
	}
	
    }

    if (newY < oldY){
	oldY -=frameY;
	if(turtleShow==1){
	    turtle.translate(0,-frameY);

	}
	
    }
	
	 // prints the little circles every frame until we reach the correct point
    // to create the line
    if (newY != oldY || newX != oldX || changRot != 0){
	
	if(newPen == 1 ){  
	 
        path.add(new paper.Point(oldX, oldY));
	path.strokeColor = newColour;

	}
    }
    // done animating this command
    else{
	path.add(new paper.Point(newX, newY));
	nextCount();
    }		
}
}


