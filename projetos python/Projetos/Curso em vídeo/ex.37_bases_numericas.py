num = int(input('Digite um número inteiro'))
	
print ('''Escolha uma base para conversão:
[1] para BINÁRIO 
[2] para OCTAL
[3] para HEXADECIMAL''')

opção = int(input(' sua opção:'))

if opção == 1:
    print ('{} convertido para BINÁRIO é igual a {}!' .format(num,bin(num)[2:]))
elif opção == 2:
    print ('{} convertido para OCTAL é igual a {}!' .format(num, oct(num)[2:]))
elif opção == 3:
    print ('{} convertido para HEXADECIMAL é igual a {}!' .format(num,hex(num)[2:]))
else:
    print ('Opção inválida. Tente novamente!')
    