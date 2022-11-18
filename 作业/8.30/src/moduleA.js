const age = Symbol('age')

class Dog {
    constructor() {
        this[age] = 18
    }

    show() {
        console.log(this[age]);
    }

    addAge() {
        this[age]++
    }
}
export {Dog}