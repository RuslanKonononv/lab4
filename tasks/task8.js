import Stack from "../Classes/Stack.js";

export const stringRevers = (string) =>{
    let array = string.split(' ')
    let stack = new Stack()
    array.map(string =>{
        stack.pushFront(string);
    })
    while(!stack.isEmpty()){
        console.log(stack.popFront());
    }
}