const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Hunter = require("../../models/Hunter");

const { cacador, viajante } = require("./../../app");

/* GIVEN */

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string;
  });

  Given('ele sempre começa a viagem com {int} refeições', function (int) {
    cacador.food = int;
    });

    Given('ele sempre começa a viagem saudável', function () {
        cacador.isHealthy = true;
      });

/* WHEN */

When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Hunter parar para comer {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++){
        cacador.eat()
    }
});

        

When('o Hunter parar para comer {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++){
        cacador.eat()
    }
});

            


When('o Hunter der {int} refeição ao Traveler {string}', function (string) {
   cacador.giveFood(viajante, int)
});

              
/* THEN */

Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('a quantidade de refeições do Traveler {string} deve ser igual a {int}', function (string, int) {
    assert.strictEqual(viajante.food, int)
});