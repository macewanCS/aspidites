
import math
class Turtle:

          

    def __init__(self):
        self.posX = 1
        self.posY = 1
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
        self.posY += num * math.sin(math.radians(self.bearing))
        self.printTurtle()

    def backward(self, num):
        self.posX -= num * math.cos(math.radians(self.bearing))
        self.posY -= num * math.sin(math.radians(self.bearing))
        self.printTurtle()

    def printTurtle(self):
        print "TURTLE" + " " + str(self.posX) + " " + str(self.posY) + " " + str(self.bearing);

    def home(self):
        self.posX = 0
        self.posY = 0
        self.bearing = 0
        self.printTurtle()

    



