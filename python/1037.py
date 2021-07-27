x = float(input())

if ((0 <= x) and (x <= 25)):
    print("Intervalo [0,25]")   
if ((25 < x) and (x <= 50)):
    print("Intervalo (25,50]")
if ((50 < x) and (x <= 75)):
    print("Intervalo (50,75]")
if ((75 < x) and (x <= 100)):
    print("Intervalo (75,100]")
if((0 > x) or (x > 100)):
    print("Fora de intervalo")