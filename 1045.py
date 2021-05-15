x,y,z= map(float, input().split(" "))

if (x>=y and x>=z):
    a=x 
    if (y>z):
        b=y 
        c=z 
    else:
        b=z 
        c=y 
             
elif (y>=x and y>=z):
    a=y 
    if (x>z):
        b=x 
        c=z 
    else:
        b=z 
        c=x 
             
else:
    a=z 
    if(y>x):
        b=y 
        c=x 
    else:
        b=x 
        c=y 
             
         

if(a>=b+c):
    print("NAO FORMA TRIANGULO") 
else:
    if(a*a==b*b+c*c):
        print("TRIANGULO RETANGULO") 
             
    if(a*a>b*b+c*c):
        print("TRIANGULO OBTUSANGULO") 
             
    if(a*a<b*b+c*c):
        print("TRIANGULO ACUTANGULO") 
             
    if((a==b) or (b==c) or (a==c)):
        if((a==b) and (a==c) and (b==c)):
            print("TRIANGULO EQUILATERO") 
        else:
            print("TRIANGULO ISOSCELES")