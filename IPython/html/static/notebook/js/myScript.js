/*
myScript.js handles turtle animation using the canvas tool and the paper.js script
*/


var c = document.getElementById('canvas1');
document.getElementById("canvas1").style.background =' 	#99CCFF';
paper.setup(c);

/*
getValue splits up the string with any turtle infromation, breaks it up 
into points which have an x, y and b value. It is called 6 times for every turtle command entered (once for each new and old point value). Count is itterated for 
turtle command entered. The count argument should tell the function which turtle 
command you want information about, the coord argument should specify which or the 6 possible pieces of information about each command you're looking for.
*/
function getValue(count,coord){

	var d = ($(".turtle-coordinates")).text().replace(/\n/g, ",").split(",");

	var x;
	var y;
	var wCoord = coord;

	var points = [{x:200, y:200, b:0}];
	var wCount = count;

	for(i = 0; i < d.length ; i+=3){
	   
		x = parseInt(d[i]);   
		y = parseInt(d[i+1]);
		b = parseInt(d[i+2]);
		  
		points.push ({x:x, y:y, b:b});	
	}
	
	if(coord == 1){
		return 	oldX = points[wCount].x;
	}
	else if(coord == 2){
		return 	oldY = points[wCount].y;
	}
	else if(coord == 3){
		return 	oldRotation = points[wCount].b;
	}
	else if(coord == 4){
		return 	newX = points[wCount+1].x;
	}
	else if(coord == 5){
		return 	newY = points[wCount+1].y;
	}
	else if(coord == 6){
		return 	newRotation = points[wCount+1].b;
	}	
}	
// some variable to play with still
var lineColour = "black";
var lineSize = 2;
var rotateSpeed = 1;
var turtleColour ='#006900' ;
var turtleShow = 1;

// onFrame variables
var oldX;
var oldY;
var oldRotation;
var newX; 
var newY;
var newRotation;

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
	
	 oldX = getValue(count,1);
	 oldY = getValue(count,2);
	 oldRotation = getValue(count,3);
	 newX = getValue(count,4);
	 newY = getValue(count,5);
 	 changRot = getValue(count,6);
	 count++;


	



// Good test command to see what the input is from the string
// alert("old:"+oldX +" "+ oldY + " " + oldRotation + " New:" + newX + " " +newY + " " + newRotation+ " " + changRot);
}

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

	}






/*
The onFrame function does all the drawing, its called every frame at roughly
30-60fps
*/

paper.view.onFrame = function(event) { 

	var changX =Math.abs(oldX-newX);
	var changY =Math.abs(oldY-newY);
	
	
	
	// the frame variables outline how much in which direction, this allows
	// the turtle to take the shortest route
	var frameX;
	var frameY;

	// can't devide by 0, no need for frame calculation anyway if there's 
	// no change in on direction
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
	
	
	
	//rotate turtle, current is the exact centre of the turtle
	if (  changRot != 0 && turtleShow==1){


		var current = new paper.Point(oldX, oldY);
		

		if(changRot < 0){		
	
		changRot += rotateSpeed;
		tail.rotate(-rotateSpeed,current);
		circle1.rotate(-rotateSpeed,current);
		circle2.rotate(-rotateSpeed,current);
		circle3.rotate(-rotateSpeed,current);
		circle4.rotate(-rotateSpeed,current);
		circle5.rotate(-rotateSpeed,current);
		circle6.rotate(-rotateSpeed,current);


		}
		if(changRot > 0){

		changRot -= rotateSpeed;
		tail.rotate(rotateSpeed,current);		
		circle1.rotate(rotateSpeed,current);
		circle2.rotate(rotateSpeed,current);
		circle3.rotate(rotateSpeed,current);
		circle4.rotate(rotateSpeed,current);
		circle5.rotate(rotateSpeed,current);
		circle6.rotate(rotateSpeed,current);	


		}
	}
	//if turtle is off we have to manually set old rotation	
	else{
		oldRotation = newRotation;
	}
	
    	if (newX > oldX){
		oldX += frameX;

		if(turtleShow==1){
			tail.translate(frameX,0);
			circle1.translate(frameX,0);
			circle2.translate(frameX,0);
			circle3.translate(frameX,0);
			circle4.translate(frameX,0);
			circle5.translate(frameX,0);
			circle6.translate(frameX,0);
		}

		
	}

	if (newY > oldY){
		oldY += frameY;
		if(turtleShow==1){
			tail.translate(0,frameY);
			circle1.translate(0,frameY);
			circle2.translate(0,frameY);
			circle3.translate(0,frameY);
			circle4.translate(0,frameY);
			circle5.translate(0,frameY);
			circle6.translate(0,frameY);
		}

		
	}

	if (newX < oldX){
		oldX -= frameX;
		if(turtleShow==1){
			tail.translate(-frameX,0);
			circle1.translate(-frameX,0);
			circle2.translate(-frameX,0);
			circle3.translate(-frameX,0);
			circle4.translate(-frameX,0);
			circle5.translate(-frameX,0);
			circle6.translate(-frameX,0);
		}
		
	}

	if (newY < oldY){
		oldY -=frameY;
		if(turtleShow==1){
			tail.translate(0,-frameY);
			circle1.translate(0,-frameY);
			circle2.translate(0,-frameY);
			circle3.translate(0,-frameY);
			circle4.translate(0,-frameY);
			circle5.translate(0,-frameY);
			circle6.translate(0,-frameY);
		}
	
		
	}
	// prints the little circles every frame until we reach the correct point
	// to create the line
	if (newY != oldY || newX != oldX || changRot != 0){
		var CP = new paper.Point(oldX, oldY);
	
		var centerCircle = new paper.Path.Circle(CP, lineSize);
		centerCircle.fillColor = lineColour;
		paper.view.draw();
	
	}
	// done animating this command
	else{
		nextCount();

	}


}


