n=int(input())
h = 0
m = 0
s = 0
if(n>=365):
    h = n/365
    n = n%365
    m = n/30
    n = n%30
    s = n
if(n>=30):
    m = n/30
    n = n%30
    s = n
if(n<30):
    s = n
    
print("%d ano(s)" % h)
print("%d mes(es)" % m)
print("%d dia(s)" % s)
             