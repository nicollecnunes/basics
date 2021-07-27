n1,n2,n3,n4= map(float, input().split(" "))

m = ((n1*2 + n2*3 + n3*4 + n4*1)/10)

print("Media: %.1f"% m)
if(m<5):
    print("Aluno reprovado.")
        
if(m>=7):
    print("Aluno aprovado.")    
elif(m>=5):
    print("Aluno em exame.")
    ne = float(input())
    print("Nota do exame: %.1f"% ne)
    m2 = (m+ne)/2
    if (m2>=5):
        print("Aluno aprovado.")
        print("Media final: %.1f"% m2)
    else:
        print("Aluno reprovado.")
        print("Media final: %.1f"% m2)

    
                
        
        
        
        



#print("Total: R$ %0.2f" % t)
