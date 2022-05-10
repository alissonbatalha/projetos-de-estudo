c1 = float(input('Qual o valor da casa?'))
c2 = float(input('Qual o seu salário?'))
c3 = int(input('Em quantos anos será o financiamento?'))

np = c3 * 12
par= c1 / np
por = (c2 / 100) * 30
print ('O financiamento ficará em {} parcelas de {:.2f}!' .format(np, par))

if par <= por:
   print ('O empréstimo será concedido!')
else:
   print ('Empréstimo negado!')