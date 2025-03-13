function myFn(fn) {
    fn();
    return () => 10;
}

myFn();

let numberList = [10, 30, 20,  50, 70];

numberList.forEach(function(element, index) {
    console.log(index, element);
})

let newArr = numberList.map(function(element, index){
    return `Phaanf tử: ${element}`
});
console.log(newArr);

let esult = numberList.reduce(function(acc, cur) {
    console.log("acc", acc)
    console.log("cur", cur)
    return acc + cur;
}, 0);

console.log(result)