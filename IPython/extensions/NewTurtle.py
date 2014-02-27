
import math
class Turtle:

          
    

    def __init__(self):
        self.posX = 200
        self.posY = 200
        self.bearing = 0

    def right(self, num):
        self.bearing -= num
        self.bearing = self.bearing%360
        self.printTurtle()

    def left(self, num):
        self.bearing += num
        self.bearing = self.bearing%360
        self.printTurtle()

    def forward(self, num):
        self.posX += num * math.cos(math.radians(self.bearing))
        self.posY -= num * math.sin(math.radians(self.bearing))

        if self.posX < 20:
            self.posX = 20
        if self.posY < 20:
            self.posY = 20

        if self.posX > 780:
            self.posX = 780
        if self.posY > 780:
            self.posY = 780

        self.printTurtle()

    def backward(self, num):
        # if self.bearing < 180 and self.bearing > 0:
        self.posX -= num * math.cos(math.radians(self.bearing))
        self.posY += num * math.sin(math.radians(self.bearing))

        if self.posX < 20:
            self.posX = 20
        if self.posY < 20:
            self.posY = 20

        if self.posX > 780:
            self.posX = 780
        if self.posY > 780:
            self.posY = 780

        self.printTurtle()

    def printTurtle(self):
        print "TURTLE" + " " + str(self.posX) + " " + str(self.posY) + " " + str(self.bearing);

    def home(self):
        self.posX = 200
        self.posY = 200
        self.bearing = 200
        self.printTurtle()

    



