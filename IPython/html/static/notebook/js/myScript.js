
/*var e = ($(".test")).text();
alert(e);*/
// This works.


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


/*
var turtleDraw = function(x, y, b){
    var c = document.getElementById('canvas1');
    paper.setup(c);

    var path = new paper.Path();
    path.strokeColor = 'black';
    var start = new paper.Point(0, 0);
    path.moveTo(start);

    path.lineTo(start.add([ x, y ]));


    paper.view.draw();
}
*/