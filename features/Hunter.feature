# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar e racionar meus mantimentos
    Para que eu possa seguir a viagem saudável

    Contexto:
        Dado um Hunter de nome "Peter"
        E ele sempre começa a viagem com 2 refeições
        E ele sempre começa a viagem saudável

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 7

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 3
        E o Hunter não ficará doente

    Cenário: Saiu para caçar, e deu uma refeição ao Traveler "João"
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter der 1 refeição ao Traveler "João"
        Então a quantidade de refeições deve ser igual a 6
        E a quantidade de refeições do Traveler "João" deve ser igual a 3