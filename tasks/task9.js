import Stack from "../Classes/Stack.js";

const typeOfTerm = (term) => {
    if (term.length === 2) {
        return {
            type: "term",
            value: term
        }
    }
    return {
        type: "compute",
        value: "+" + term
    }
}

export const computeLogic = (object) => {

    let currentBooleanValue = 0
    let termsStack = new Stack()

    if (object.type === "compute") {
        let stringStack = new Stack()
        let logicalExpressions = object.value.match(/[+*][FT]|(?<=\().*(?=\))/gm)

        console.log(logicalExpressions)
        logicalExpressions.map(term => {
            stringStack.pushFront(term)
        })
        while (!stringStack.isEmpty()) {
            if (typeOfTerm(stringStack.peekFront()).type === "term") {
                termsStack.pushFront(typeOfTerm(stringStack.popFront()))
            } else {
                termsStack.pushFront(computeLogic(typeOfTerm(stringStack.popFront())))
            }
        }
    }
    let reverseStack = termsStack
    while(!reverseStack.isEmpty()){
        let currentAction = reverseStack.popFront()
        if(currentAction.value === "+T"){
            currentBooleanValue = 1
        }
        if(currentAction.value === '*F'){
            currentBooleanValue = 0
        }
    }
    let term = currentBooleanValue ? "+T" : "+F"
    console.log(!!currentBooleanValue ? "+T" : "+F")
    return {
        type: "term",
        value: term
    }
}