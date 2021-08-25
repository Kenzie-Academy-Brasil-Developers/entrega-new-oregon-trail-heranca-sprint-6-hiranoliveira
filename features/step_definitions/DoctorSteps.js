const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Doctor = require("../../models/Doctor");

const { doutor, viajante } = require("./../../app");

/* GIVEN */

Given('um Doutor de nome {string}', function (string) {
    doutor.name = string
});


/* WHEN */

When('o Traveler {string} estiver doente', function (string) {
    viajante._isHealthy === false
  });

/* THEN */

Then('o Doutor {string} curará o Traveler {string}', function (string, string2) {
    doutor.heal(viajante)
});

Then('o Traveler {string} ficará saudável', function(string) {
    assert.strictEqual(viajante.isHealthy, true)
  });

/* WHEN2 */

When('o Traveler {string} estiver saudável', function (string) {
    viajante.isHealthy === true
  });

/* THEN2 */

Then('o Doutor {string} tentará curar o Traveler {string}', function (string, string2) {
    doutor.heal(viajante)
});

Then('Traveler {string} continuará saudável', function (string) {
    assert.strictEqual(viajante.isHealthy, true)
  });