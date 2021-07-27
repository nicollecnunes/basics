x,q= map(int, input().split(" "))

t=float()
if (x==1):
    t=q*4.0   
if (x==2):
    t=q*4.5
if (x==3):
    t=q*5.0
if (x==4):
    t=q*2.0
if (x==5):
    t=q*1.5
    
print("Total: R$ %0.2f" % t)