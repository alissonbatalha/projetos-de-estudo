from datetime import date

s = int(input(''' Qual o seu sexo?
[1] masculino
[2] feminino'''))

if s == 2:
   print ('Você não precisa se alistar, obrigado!')
   exit() 

ano = int(input('Digite seu ano de nascimento:'))

atual = date.today().year
idade = atual - ano 
alist = 18 

if idade < alist:
   print ('Quem nasceu em {} tem {} anos em {}!' .format(ano, idade, atual))
   print ('Faltam {} anos para o seu alistamento!' .format(alist - idade))
elif idade > alist:
   print ('Quem nasceu em {} tem {} anos em {}!' .format(ano, idade , atual))
   print ('Você se alistou em {}!' .format(ano + alist))
else :
   print ('Quem nasceu em {} tem {} anos em {}!' .format(ano, idade, atual))
   print ('Você tem que se alistar imediatamente!')

