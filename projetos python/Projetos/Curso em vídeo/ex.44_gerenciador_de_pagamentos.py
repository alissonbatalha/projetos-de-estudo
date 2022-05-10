print ('============== Lojas Batalha ==============')

preço = float(input('Qual o valor total da compra? R$ '))

print (''' Qual a forma de pagamento?
[1] À vista no dinheiro/cheque
[2] À vista no cartão 
[3] 2X no cartão 
[4] 3X ou mais no cartão ''')

pag = int(input('Qual é a opção? '))

if pag == 1:
   des = preço - ((preço / 100) * 10 )
   print ('O preço final será de {}\ncom 10% de desconto!' .format(des))
elif pag == 2:
   des = preço - ((preço / 100) * 5 )
   print ('O preço final será de {}\ncom 5% de desconto!' .format(des))
elif pag == 3:
    par = preço / 2 
    print ('O preço final será de {}\nem duas parcelas de {} sem juros!' .format(preço, par))
elif pag == 4:
    taxa = preço + ((preço / 100) * 20) 
    qp = int(input(' em quantas parcelas?'))
    vp = taxa / qp
    print ('O valor final será de {:.2f}' .format(taxa))
    print ('Em {} parcelas de {:.2f}!' .format(qp, vp))
else: 
    print ('Opção inválida! Tente novamente!')

# fim código