#import easygui as eg
import math
import json
import atexit




#from IPython.core.displaypub import DisplayPublisher
from IPython.core.displaypub import publish_display_data
#from IPython.kernal.zmq.datapub import publish_data
from IPython.kernel.zmq.datapub import publish_data
from IPython.core.interactiveshell import InteractiveShell

class Turtle:
    SIZE = 400
    OFFSET = 20;
    TURTLE_BUFF = "";
    REGISTERED = 0
    def __init__(self):
        '''Create a Turtle.
        Turtle()
        Example: t = Turtle()'''    
        self.pen = 1
        self.speedVar = 1
        self.color = "black"
        self.home()
        if(not Turtle.REGISTERED):
            get_ipython().register_post_execute(self.postExecuteTurtle)

    def postExecuteTurtle(self):
        publish_display_data("IPython.extensions.NewTurtle",{'application/turtle' : Turtle.TURTLE_BUFF})
        Turtle.TURTLE_BUFF = ""
        #eg.msgbox("Turtle")
        Turtle.REGISTERED = 1
        

    def pendown(self):
        '''Put down the pen. This is the default.
        pendown()
        Example: t.pendown()'''
        self.pen = 1

    def penup(self):
        '''Lift up the pen.
        penup()
        Example: t.penup()'''
        self.pen = 0

    def speed(self, speed):
        '''Change the speed of the turtle
        speed(speed)
        Example: t.speed(speed)'''
        if speed == "fast":
            self.speedVar = 2
        elif speed == "slow":
            self.speedVar = 1
            

    def right(self, num):
        '''Move the Turtle num degrees to the right.
        right(num)
        Example: t.right(90)'''
        self.bearing -= num
        self.bearing = self.bearing%360
        self.b_change = num   
        self.printTurtle()

    def left(self, num):
        '''Move the Turtle num degrees to the left.
        left(num)
        Example: t.left(90)'''
        self.bearing += num
        self.bearing = self.bearing%360
        self.b_change = (-1)*num
        self.printTurtle()

    def forward(self, num):
        '''Move the Turtle forward by num units.
        forward(num)
        Example: t.forward(100)'''
        '[1, "simple", "list"]'

        self.posX += num * math.cos(math.radians(self.bearing))
        self.posY -= num * math.sin(math.radians(self.bearing))

        if self.posX < Turtle.OFFSET:
            self.posX = Turtle.OFFSET
        if self.posY < Turtle.OFFSET:
            self.posY = Turtle.OFFSET

        if self.posX > Turtle.SIZE - Turtle.OFFSET:
            self.posX = Turtle.SIZE - Turtle.OFFSET
        if self.posY > Turtle.SIZE - Turtle.OFFSET:
            self.posY = Turtle.SIZE - Turtle.OFFSET

	self.b_change = 0
        self.printTurtle()

    def backward(self, num):
        '''Move the Turtle backward by num units.
        backward(num)
        Example: t.backward(100)'''
        self.posX -= num * math.cos(math.radians(self.bearing))
        self.posY += num * math.sin(math.radians(self.bearing))

        if self.posX < Turtle.OFFSET:
            self.posX = Turtle.OFFSET
        if self.posY < Turtle.OFFSET:
            self.posY = Turtle.OFFSET

        if self.posX > Turtle.SIZE - Turtle.OFFSET:
            self.posX = Turtle.SIZE - Turtle.OFFSET
        if self.posY > Turtle.SIZE - Turtle.OFFSET:
            self.posY = Turtle.SIZE - Turtle.OFFSET
	self.b_change = 0
        self.printTurtle()

    def pencolor(self, color):
        '''Change the color of the pen to color. Default is black.
        pencolor(color)
        Example: t.pencolor("red")'''
        self.color = color

    def printTurtle(self):
        #print "TURTLE" + " " + str(self.pen) + " " + str(self.color) + " " + str(self.posX) + " " + str(self.posY) + " " + str(self.b_change) + " " + str(self.speedVar)
        #f = DisplayPublisher();
        #f.publish("IPython.extensions.NewTurtle",{'text' : 'text/plain'});

        Turtle.TURTLE_BUFF += str(self.pen) + "," + str(self.color) + "," + str(self.posX) + "," + str(self.posY) + "," + str(self.b_change) + "," + str(self.speedVar) + ",";

      
       # publish_display_data("IPython.extensions.NewTurtle",{'application/turtle' : jencode})
#        eg.msgbox(jencode)
        #publish_display_data("IPython.extensions.NewTurtle",{'application/turtle' : str(self.pen) + " " + str(self.color) + " " + str(self.posX) + " " + str(self.posY) + " " + str(self.b_change) + " " + str(self.speedVar) });
  



      
    def circle(self, radius, extent=360):
        temp = self.bearing
        self.b_change = 0;
        for i in range(0, (extent/2)):
            n = math.fabs(math.radians(self.b_change) * radius)
            if(radius >= 0):
                self.forward(n);
                self.left(2);
            else:
                self.forward(n);
                self.right(2);
        if(radius >= 0):
            self.bearing = (temp + extent)
        else:
            self.bearing = (temp - extent)

    def home(self):
        '''Move the Turtle to its home position.
        home()
        Example: t.home()'''
        self.posX = 200
        self.posY = 200
        self.bearing = 0
        self.b_change = 0
        self.printTurtle()

       

    




