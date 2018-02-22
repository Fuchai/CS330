"use strict"

class PrimeKeeper {

    constructor() {
        this._currentPrime = 2
    }

    isPrime(candidate) {
        var prime = true
        if (candidate % 2 == 0) {
            prime = false;
        }
        for (let i = 3; i <= Math.floor(Math.sqrt(candidate)) && prime; i += 2) {
            if (candidate % i == 0) {
                prime = false;
            }
        }
        return prime
    }

    nextPrime() {
        var done = false;
        var candidate = this._currentPrime + 1
        while (! done ) {
            if (this.isPrime(candidate)) {
                done = true;
                this._currentPrime = candidate
            } else {
                candidate += 1
            }
        }
        return candidate
    }

    get currentPrime(){
        return this._currentPrime
    }

    set currentPrime(a){
        this._currentPrime=a
    }
}

var pk = new PrimeKeeper()
console.log(pk.currentPrime)

// if (typeof window === 'undefined') {
//
//     var pk = new PrimeKeeper()
//     for (let i = 0; i < 100; i++) {
//         console.log(pk.nextPrime())
//     }
//
// }
