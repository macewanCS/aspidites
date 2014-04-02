"""Tests for Octave magics extension."""

import nose.tools as nt
from IPython.extensions import NewTurtle

def setup(): 
    global t
   
 
def test_forward():
    t = NewTurtle.Turtle()
    t.forward(100)
    nt.assert_equals(t.posX,300)

    t = NewTurtle.Turtle()
    t.forward(0)
    nt.assert_equals(t.posX,200)

    t = NewTurtle.Turtle()
    t.forward(-50)
    nt.assert_equals(t.posX,150)

    t = NewTurtle.Turtle()
    t.forward(1000)
    nt.assert_equals(t.posX,380)

def test_backward():
    t = NewTurtle.Turtle()
    t.backward(100)
    nt.assert_equals(t.posX,100)

    t = NewTurtle.Turtle()
    t.backward(0)
    nt.assert_equals(t.posX,200)

    t = NewTurtle.Turtle()
    t.backward(-50)
    nt.assert_equals(t.posX,250)

    t = NewTurtle.Turtle()
    t.backward(1000)
    nt.assert_equals(t.posX,20)

def test_penup():
    t = NewTurtle.Turtle()
    t.penup()
    nt.assert_equals(t.pen,0)

def test_pendown():
    t = NewTurtle.Turtle()
    t.pendown()
    nt.assert_equals(t.pen,1)
def test_speed():
    t = NewTurtle.Turtle()
    t.speed("slow")
    nt.assert_equals(t.speedVar,1)

    t = NewTurtle.Turtle()
    t.speed("fast")
    nt.assert_equals(t.speedVar,2)

def test_home():
    t = NewTurtle.Turtle()
    t.home()
    nt.assert_equals(t.posX,200)
    nt.assert_equals(t.posY,200)
    nt.assert_equals(t.bearing,0)

def test_color():
    t = NewTurtle.Turtle()
    t.pencolor("black")
    nt.assert_equals(t.color,"black")

    t = NewTurtle.Turtle()
    t.pencolor("white")
    nt.assert_equals(t.color,"white")

    t = NewTurtle.Turtle()
    t.pencolor("red")
    nt.assert_equals(t.color,"red")
