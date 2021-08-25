const Traveler = require("./Traveler")

class Doctor extends Traveler {
    constructor(name, food, isHealthy, ){
        super(name, food, isHealthy)
    }

    heal(traveler){
        if (traveler.isHealthy === false){
            traveler.isHealthy === true
        }
    }
}

module.exports = Doctor