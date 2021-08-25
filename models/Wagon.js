class Wagon {
    constructor(capacity){
        this._capacity = capacity
        this._passengers = []
    }

    get capacity(){
        return this._capacity
    }

    get passengers(){
        return this._passengers
    }
    
    set capacity(capacity){
        this._capacity = capacity
    }

    set passengers(passengers){
        this._passengers = passengers
    }
    
    getAvailableSeatCount(){
        return (this._capacity - this._passengers.length)
    }
    
    join(traveler){
        if (this.getAvailableSeatCount() > 0){
            this._passengers.push(traveler)
        }
    }

    shouldQuarantine(){
        for (let i = 0; i < this._passengers.length; i++){
            if (this._passengers[i].isHealthy == false){
                return true
            }
        } return false
    }

    totalFood(){
        let count = 0
        for (let i = 0; i < this._passengers.length; i++){
            count += this._passengers[i].food
        }
        return count
    }
}

module.exports = Wagon;