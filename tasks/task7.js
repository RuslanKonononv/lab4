import Deque from "../Classes/Deque.js";


export const numbersParse = (array) => {
    let deque = new Deque();
    array.map(item =>{
        if(item < 0){
            deque.pushBack(item)
        }
        else{
            deque.pushFront(item)
        }
    })
    while (!deque.isEmpty()){
        console.log(deque.popBack())
    }
}