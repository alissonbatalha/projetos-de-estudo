from random import randint

def titulo (txt):
    print ('-' * 50)
    print (txt)
    print ('-' * 50)

numero = randint (0,100)
tentativas = 0

titulo ('            Vamos jogar!')

while True:
    jogador = int(input('escolha um número de 0 à 100: '))
    if jogador > numero:
        print ('Menos')
        tentativas += 1
    elif jogador < numero:
        print ('mais')
        tentativas += 1
    else:
        tentativas += 1
        print (f'Você acertou!')
        break
print (f' Número de tentativas: {tentativas}')
print ('Fim de jogo!')


    
