import math
cem = 0
cinq = 0
vin = 0
dez = 0
cinc = 0
doi = 0
um = 0
mcinq = 0
mvin = 0
mdez = 0
mcinc = 0
mum = 0
n=float(input())

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
        
if (n>=1):
    um = n
    
n = n - math.floor(n)
n = n*100

if (n>=50):
    mcinq = n/50
    n = n%50

if (n>=25):
    mvin = n/25
    n = n%25
  
if (n>=10):
    mdez = n/10
    n = n%10

if (n>=5):
    mcinc = n/5
    n = n%5
        
if (n>=1):
    mum = n

print("NOTAS:")
print("%d nota(s) de R$ 100.00" % cem)
print("%d nota(s) de R$ 50.00" % cinq)
print("%d nota(s) de R$ 20.00" % vin)
print("%d nota(s) de R$ 10.00" % dez)
print("%d nota(s) de R$ 5.00" % cinc)
print("%d nota(s) de R$ 2.00" % doi)
print("MOEDAS:")
print("%d moeda(s) de R$ 1.00" % um)
print("%d moeda(s) de R$ 0.50" % mcinq)
print("%d moeda(s) de R$ 0.25" % mvin)
print("%d moeda(s) de R$ 0.10" % mdez)
print("%d moeda(s) de R$ 0.05" % mcinc)
print("%d moeda(s) de R$ 0.01" % mum)