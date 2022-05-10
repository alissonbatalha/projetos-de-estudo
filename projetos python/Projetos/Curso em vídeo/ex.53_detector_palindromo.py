frase = str(input('Digite uma frase:')).strip().upper()
palavra = frase.split()
junto = ''.join(palavra)
inverso = junto[::-1]
print ('O inverso de {} é {} ...' .format(junto, inverso))
if junto == inverso:
    print ('Temos um palíndromo!')
else:
    print ('Não temos um palíndromo!')

#fim código 
