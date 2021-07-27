t = int(input())
a=0
b=1
x = [a,b]

while len(x)<61:
    a, b = b, a+b
    x.append(b)

for i in range (0,t):
    y = int(input())
    print('Fib(%d) = %d' %(y, x[y]))
    