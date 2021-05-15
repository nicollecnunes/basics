cp1,n1,v1= map(float, input().split(" "))
cp2,n2,v2= map(float, input().split(" "))

total = n1*v1 + n2*v2

print("VALOR A PAGAR: R$ %0.2f" % total)