import math
X1,Y1= map(float, input().split(" "))
X2,Y2= map(float, input().split(" "))
d = float(math.sqrt((X2-X1)*(X2-X1) + (Y2-Y1)*(Y2-Y1)))
print("%0.4f" % d)