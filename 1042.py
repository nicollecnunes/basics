x,y,z= map(int, input().split(" "))
if (x<y and x<z):
    print(x)
    if (y<z):
        print(y)
        print(z)
    else:
        print(z)
        print(y)
  
  
if (y<x and y<z):
    print(y)
    if (x<z):
        print(x)
        print(z)
    else:
        print(z)
        print(x)
     
     
if (z<x and z<y):
    print(z)
    if (x<y):
        print(x)
        print(y)
    else:
        print(y)
        print(x)
            
        
print("")
print(x)
print(y)
print(z)