import Stack from "../Classes/Stack.js";

export const bracketFinderStack = (array) =>{
    let stack = new Stack()
    let flag = true;
    array.map( item =>{
        if(item === '('){
            stack.pushFront('(')
        }
        else if(item === ')'){
            if(!stack.isEmpty()){
                stack.popFront()
            }
            else {
                flag = false
            }
        }
    })
    return flag && !!stack.isEmpty()
}