n1 = float(input('  Primeira nota:'))
n2 = float(input('  segunda nota:'))

média = (n1 + n2) /2 

print ('Sua média foi de {}!' .format(média))

if média < 5:
   print ('Você foi reprovado. Estude mais!')
elif média >= 7:
   print ('Você foi aprovado, parabéns!')
else:
   print ('Você está de recuperação. Estude mais!')
