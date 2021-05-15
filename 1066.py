n=0
pa=0;
po=0;
ne=0;
for i in range (0,5,1):
    x=int(input())
    if x%2==0:
        pa=pa+1
    if x>0:
        po=po+1
    if x<0:
        ne=ne+1
print("%d valor(es) par(es)" % pa)
print("%d valor(es) impar(es)" % (5-pa))
print("%d valor(es) positivo(s)" % po)
print("%d valor(es) negativo(s)" % ne)