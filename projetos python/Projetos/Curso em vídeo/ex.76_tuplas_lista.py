produtos = ('Ipad air 3', '5399',
            'Macbook air', '8399',
            'iphone x', '4999',
            'airdot apple', '1599',
            'iphone 11', '6299',
            'apple watch', '2499',)
print ('-' * 50)
print (f'{"LISTA DE PRODUTOS APPLE":^50}')
print ('-' * 50)
for item in range(0, len(produtos)):
    if item % 2 == 0:
        print (f'{produtos[item]:.<30}', end='')
    else:
        print (f'R${produtos[item]:>5}')
print ('-' * 50)

# FIM CODIGO
