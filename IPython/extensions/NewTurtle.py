
import math
class Turtle:


    SIZE = 400
    OFFSET = 20;
    def __init__(self):
        '''Create a Turtle.
        Example: t = Turtle()''' 
        self.posX = 200
        self.posY = 200
        self.bearing = 0
        self.b_change = 0

    def right(self, num):
        '''Move the Turtle x degrees to the right.
        Example: t.right(90)'''
        self.bearing -= num
        self.bearing = self.bearing%360
        self.b_change = num;
      
        self.printTurtle()

    def left(self, num):
        '''Move the Turtle x degrees to the left.
        Example: t.left(90)'''
        self.bearing += num
        self.bearing = self.bearing%360
        self.b_change = (-1)*num

        
        self.printTurtle()

    def forward(self, num):
        '''Move the Turtle forward by x units.
        Example: t.forward(100)'''
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
        '''Move the Turtle backward by x units.
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

    def printTurtle(self):
        print "TURTLE" + " " + str(self.posX) + " " + str(self.posY) + " " + str(self.b_change);

    def home(self):
        '''Move the Turtle to its home position.
        Example: t.home()'''
        self.posX = 200
        self.posY = 200
        self.bearing = 0
        self.printTurtle()

    
    


