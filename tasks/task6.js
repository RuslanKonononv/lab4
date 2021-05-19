import Stack from "../Classes/Stack.js";


export const regexParse = (string) => {
    let array = string.split("")
    let numbers = new Stack()
    let letters = new Stack()
    let other = new Stack()

    array.map(item => {
        if (item.match(/[0-9]/)){
            numbers.pushFront(item)
        }
        else if (item.match(/[a-zA-Z]/)){
            letters.pushFront(item)
        }
        else{
            other.pushFront(item)
        }
    })

    let numbersRevers = new Stack()
    let lettersRevers = new Stack()
    let otherRevers = new Stack()

    while (!numbers.isEmpty()) {
        numbersRevers.pushFront(numbers.popFront())
    }
    while (!letters.isEmpty()) {
        lettersRevers.pushFront(letters.popFront())
    }
    while (!other.isEmpty()) {
        otherRevers.pushFront(other.popFront())
    }

    while (!numbersRevers.isEmpty()) {
        console.log(numbersRevers.popFront());
    }
    while (!lettersRevers.isEmpty()) {
        console.log(lettersRevers.popFront());
    }
    while (!otherRevers.isEmpty()) {
        console.log(otherRevers.popFront());
    }
}