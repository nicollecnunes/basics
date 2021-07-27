n=0
s=float()
s=0
for i in range (0,6,1):
    x=float(input())
    if x>=0:
        n=n+1
        s=s+x
print("%d valores positivos" % n)
print("%0.1f" % (s/n))