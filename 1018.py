cem = 0
cinq = 0
vin = 0
dez = 0
cinc = 0
doi = 0
um = 0
n=int(input())
tot =n

if (n>=100):
    cem = n/100
    n = n%100

if (n>=50):
    cinq = n/50
    n = n%50

if (n>=20):
    vin = n/20
    n = n%20
  
if (n>=10):
    dez = n/10
    n = n%10

if (n>=5):
    cinc = n/5
    n = n%5
        
if (n>=2):
    doi = n/2
    n = n%2
        
if (n==1):
    um = n
 
print("%d" % tot)
print("%d nota(s) de R$ 100,00" % cem)
print("%d nota(s) de R$ 50,00" % cinq)
print("%d nota(s) de R$ 20,00" % vin)
print("%d nota(s) de R$ 10,00" % dez)
print("%d nota(s) de R$ 5,00" % cinc)
print("%d nota(s) de R$ 2,00" % doi)
print("%d nota(s) de R$ 1,00" % um)