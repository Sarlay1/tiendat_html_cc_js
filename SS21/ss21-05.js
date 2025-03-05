for(let i=1; i<101; i++){
    let randomNumber = Math.floor(Math.random() * 100) + 1; 
    if(randomNumber % 3 === 0 && randomNumber % 5 === 0){
        console.log("FizzBuzz");
    }else if(randomNumber % 3 === 0){
        console.log("Fizz");
    }else if(randomNumber % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(randomNumber);
    }
}
