salario=float(input())

if (salario <= 2000.0):
    print("Isento")
elif (salario <= 3000.0):
    print("R$ %.2f" % ((salario - 2000.0) * 0.08))
elif (salario <= 4500.0):
    print("R$ %.2f" % (1000.0 * 0.08 + (salario - 3000.0) * 0.18))
else:
    print("R$ %.2f" % (1000.0 * 0.08 + 1500.0 * 0.18 + (salario - 4500.0) * 0.28))