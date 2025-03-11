function calculateSum(num1, num2) {
   return num1 + num2; 
}
let sum = calculateSum(10, 20);
calculateSum(2, 23);
calculateSum(14, 19 );
console.log(sum);


 let result = (function(a, b) {
   return a + b; 
})(10, 20);
console.log(result);
let caculateResult = function(a, b) {
    return a / b;
};