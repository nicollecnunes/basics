a,b,c= map(float, input().split(" "))

if (a < b + c and b < a + c and c < a + b):
    a = a+b+c
    print("Perimetro = %.1f" % a)
else:
    a = (b+a)*c/2
    print("Area = %.1f" % a)