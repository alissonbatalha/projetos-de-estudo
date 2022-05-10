print ('==' * 15)
print ('10 TERMOS DE UMA PA')
print ('==' * 15)

primeiro = int(input('Digite o primeiro termo:'))
razão  = int(input('Digite a razão:'))
décimo  = primeiro + (10 - 1) * razão 
for c in range (primeiro, décimo + razão, razão):
   print ('{}' .format(c),end = ' ♡ ')

# FIM CÓDIGO 