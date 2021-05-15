ih,im,fh,fm= map(int, input().split(" "))

if (ih > fh):
    if (im>fm):
        dh = (24-ih)+fh-1
        dm= 60 - (im-fm)
    else:
        dh = (24-ih)+fh
        dm = fm -im
            
elif ((ih<fh) and (im<=fm)):
    dh=fh-ih    
    dm = fm -im 
elif (ih==fh and (fm>im)):
    dh =0
    dm = fm-im
elif (ih==fh and (fm<im)):
    dh =23
    dm = 60 - (im-fm)
elif (ih==fh and (fm==im)):
    dh =24
    dm=0
elif((ih<fh) and (im>fm)):
    dh = (fh-ih)-1
    dm= 60 - (im-fm)
else:
    dh = 0
    dm= 60 - (im-fm)
        

print("O JOGO DUROU %d HORA(S) E %d MINUTO(S)" % (dh ,dm))