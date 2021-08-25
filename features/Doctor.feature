# language: pt

Funcionalidade: Doutor
    Como Doutor
    Devo curar outros viajantes para que eles possam seguir a viagem saudável.

    Contexto:
        Dado um Doutor de nome "Pippo"

    Cenário: Curou o Traveler "João"
        Quando o Traveler "João" estiver doente
        Então o Doutor "Pippo" curará o Traveler "João"
        E o Traveler "João" ficará saudável

    Cenário: Não curou o Traveler "Sergio"
        Quando o Traveler "Sergio" estiver saudável
        Então o Doutor "Pippo" tentará curar o Traveler "Sergio"
        E Traveler "Sergio" continuará saudável