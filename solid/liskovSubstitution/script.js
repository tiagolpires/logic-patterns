function birdFly() {
    return {
        fly: () => console.log('I can fly')
    }
}

function birdQuack() {
    return {
        quack: () => console.log('I can quack')
    }
}

function birdSwim() {
    return {
        swim: () => console.log('I can swim')
    }
}

function Duck() {
    return {
        ...birdQuack(),
        ...birdFly(),
        ...birdSwim()
    }
}

function Penguin() {
    return {
        ...birdQuack(),
        ...birdSwim()
    }
}

function makeBirdFly(bird) {
    bird.fly()
}
function makeBirdSwim(bird) {
    bird.swim()
}

const duck = Duck()
const penguin = Penguin()

makeBirdFly(duck)
makeBirdSwim(duck)
makeBirdSwim(penguin)


//Wrong
//Penguin extends a class that has a method that cant be implemented by the Penguin class

// class Bird {
//     fly() {
//         console.log('I can fly')
//     }
// }

// class Duck extends Bird {
//     quack() {
//         console.log('I can quack')
//     }
// }

// class Penguin extends Bird {
//     fly() {
//         throw new Error('Cannot fly')
//     }

//     swim() {
//         console.log('I can swim')
//     }
// }

// function makeBirdFly(bird) {
//     bird.fly()
// }

// const duck = new Duck()
// const penguin = new Penguin()

// makeBirdFly(duck)
// makeBirdFly(penguin)