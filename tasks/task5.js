import Deque from "../Classes/Deque.js";


export const bracketFinderDeque = (array) =>{
    let deque = new Deque()
    let flag = true;
    array.map( item =>{
        if(item === '('){
            deque.pushFront('(')
        }
        else if(item === ')'){
            if(!deque.isEmpty()){
                deque.popBack();
            }
            else flag = false;
        }
    })
    return flag && !!deque.isEmpty()
}