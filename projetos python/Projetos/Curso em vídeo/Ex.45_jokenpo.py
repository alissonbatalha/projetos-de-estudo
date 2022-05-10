from random import randint
from time import sleep

print ('Olá,  vamos brincar de JO KEN PÔ!!!')
print ('''Suas opções:
[0] PEDRA
[1] PAPEL
[2] TESOURA''')

jog = int(input(' Qual opção você escolhe?'))

print ('=' * 30)

print ('JO')
sleep(0.5)
print ('KEN')
sleep(0.5)
print ('PÔ')
sleep(0.5)

print ('=' * 30)

if jog == 0:
    print ('Você escolheu PEDRA!')
elif jog == 1:
    print ('Você escolheu PAPEL!')
elif jog == 2:
    print ('Você escolheu TESOURA!')
else: 
    print ('Opção inválida. Tente novamente!')
    exit()

pc = randint(0,2)
if pc == 0:
    print ('O computador escolheu PEDRA!')
elif pc == 1:
    print ('O computador escolheu PAPEL!')
elif pc == 2:
    print ('O computador escolheu TESOURA!')
  
print ('=' * 30)

if jog == pc: 
   print ('EMPATE!')
elif jog == 0 and pc == 1:
   print ('COMPUTADOR VENCEU!')
elif jog == 1 and pc == 2:
   print ('COMPUTADOR VENCEU!')
elif jog == 2 and pc == 0:
    print ('COMPUTADOR VENCEU!')
elif jog == 0 and pc == 2:
    print (' VOCÊ VENCEU!')
elif jog == 2 and pc == 1:
    print (' VOCÊ VENCEU!')
elif jog == 1 and pc == 0:
    print (' VOCÊ VENCEU!') 
#fim código 