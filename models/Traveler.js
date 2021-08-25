class Traveler {
    constructor(name){
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    get name(){
        return this._name
    }

    get food(){
        return this._food
    }
    get isHealthy(){
        return this._isHealthy
    }

    set name(name){
        this._name = name
    }

    set food(food){
        this._food = food
    }

    set isHealthy(healthy){
        this._isHealthy = healthy
    }
    
    hunt(){
        this._food += 2
    }

    eat(){
        if(this._food > 0){
            this._food -= 1
            this._isHealthy = true
        } else {
            this._isHealthy = false
        }
    }
}

module.exports = Traveler;