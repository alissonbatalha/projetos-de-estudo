
def conta (pn, sn): 
    print ('Qual operação você quer realizar com os números? ')
    escolha = int(input("""
    [1] adição
    [2] subtração
    [3] multiplicação
    [4] divisão\n"""))
    print('')
    
    if escolha == 1:
        print(f'{pn} + {sn} = {pn + sn}')
    elif escolha == 2:
        print (f'{pn} - {sn} = {pn - sn}')
    elif escolha == 3:
        print (f'{pn} x {sn} = {pn * sn}')
    elif escolha == 4:
        print (f'{pn} / {sn} = {pn / sn}')
    else:
        print('Por favor, escolha uma opção válida!')
        return conta(pn,sn)
    print ('-' * 50)


def pergunta ():
    n1 = int(input('Digite um número: '))
    n2 = int(input('Digite um número: '))
    conta(n1,n2)
  
    while True: 
        continuar = int(input("""
        [1] Mais uma operação 
        [2] Mudar os números 
        [3] sair\n"""))
        print ('-' * 50)
        if continuar == 2:
            n3 = int(input('Digite um novo número: '))
            n4 = int(input('Digite mais um novo número: '))
            n1 = n3
            n2 = n4
            print ('-' * 50)
            conta(n1, n2)
        elif continuar == 3:
            print ('Até a próxima!')
            break
        elif continuar == 1:
            print ('-' * 50)
            conta (n1,n2)
        else:
            print('Por favor, Digite uma opcao valida')
         
pergunta()
    
#fimcódigo 