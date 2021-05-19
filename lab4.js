import  Deque from "./Classes/Deque.js"
import Stack from "./Classes/Stack.js";
import {dequeSort} from "./tasks/task1.js";
import {bracketFinderStack} from "./tasks/task4.js";
import {bracketFinderDeque} from "./tasks/task5.js";
import {regexParse} from "./tasks/task6.js";
import {numbersParse} from "./tasks/task7.js";
import {stringRevers} from "./tasks/task8.js";
import {computeLogic} from "./tasks/task9.js";

console.log(dequeSort([10,11,12,1,123,13414]))
console.log(bracketFinderStack("(((((dadasd)()adada()(adsad))adad)))".split("")))
console.log(bracketFinderDeque("(((((dadasd)()adada()(adsad))adad))())".split("")))
regexParse("a123q@#")
numbersParse([1, -1,24,0,-123])
stringRevers("aaaaa bbbbbbb cccccc")
console.log(computeLogic({
    type: "compute",
    value: "+F+(T*F+(F+T))"
}));






