import Deque from "../Classes/Deque.js";


export const dequeSort = (array) =>{
    let dequeIncome = new Deque;
    let dequeSorted = new Deque;
    let sortedArray = [];
    array.map(item => dequeIncome.pushFront(item))

    while (!dequeIncome.isEmpty()){
        if((dequeSorted.peekFront() <= dequeIncome.peekFront()) || dequeSorted.isEmpty()){
            dequeSorted.pushFront(dequeIncome.popFront())
        }
        else{
            dequeIncome.pushBack(dequeSorted.popFront())
        }
    }

    while (!dequeSorted.isEmpty()){
        sortedArray = [...sortedArray,dequeSorted.popFront()]
    }
    return sortedArray;
}