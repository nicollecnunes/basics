i,f= map(int, input().split(" "))

if (i>= f):
    h = (24-i)+f
else:
    h=f-i
print("O JOGO DUROU %d HORA(S)" % h)