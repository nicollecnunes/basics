import math
a,b,c= map(int, input().split(" "))
MaiorAB = (a+b+abs(a-b))/2
MaiorABC = (c+MaiorAB+abs(c-MaiorAB))/2

print("%d eh o maior" % MaiorABC)