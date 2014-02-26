
/*var data = ($(".newclass")).text().replace(/\n/g, " ").split(" ");

alert(data[0]);
alert(data[1]);
alert(data[2]);
alert(data[3]);
alert(data[4]);*/
// This works.

/*
var c = document.getElementById('canvas1');
paper.setup(c);


var p = new paper.Path();
p.strokeColor = 'black';
p.moveTo(25,25);
p.lineTo(105,25);
p.lineTo(25,105);
p.fillColor = 'red';
p.moveTo(125,125);
p.lineTo(125,45);
p.lineTo(45,125);
p.closePath();

var path = new paper.Path();
path.strokeColor = 'black';
var start = new paper.Point(0, 0);
path.moveTo(start);
path.lineTo(start.add([ 141, 141 ]));

var CP = new paper.Point(400, 200);
var centerCircle = new paper.Path.Circle(CP, 50);
centerCircle.fillColor = 'black';

paper.view.draw();

*/


var d = ($(".turtle-coordinates")).text().replace(/\n/g, ",").split(",");

var c = document.getElementById('canvas1');
paper.setup(c);
var path = new paper.Path();
path.strokeColor = 'black';
var start = new paper.Point(0, 0);
path.moveTo(start);
var x = 0;
var y = 0;

for(var i = 0; i < d.length + 1;){
    /*var b = parseInt(d[2]);*/
    
    path.moveTo(start);
    alert(start);

    path.lineTo(start.add([ x, y ]));
    paper.view.draw();

    x = parseInt(d[i]);
    i++;
    y = parseInt(d[i]);
    i++;
    start = new paper.Point(x, y);
}
