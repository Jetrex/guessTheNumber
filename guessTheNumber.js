let pickedNumber = document.querySelector("#userGuess");
let button = document.querySelector("#buttonSubmit");
let outputResult = document.querySelector("#output");


let randNumber = Math.random()*10 + 1;
randNumber = Math.floor(randNumber);
// console.log(randNumber);

button.addEventListener('click', gameEngine);

function gameEngine(){
    outputResult.innerHTML = "The number you've chosen is: " + pickedNumber.value;

    //convert the input number from text to number
    let myNumber = parseInt(pickedNumber.value, 10);

    let result = document.querySelector("#result");

    let isCorrectGuess = false; 
    if (myNumber > 10 || myNumber < 1){
        isCorrectGuess = true;
        result.innerHTML = "Number must be between 1 and 10!";
    }

    if (myNumber === randNumber && !isCorrectGuess){
        result.innerHTML = "Congratulations! You've guessed the number!";
        result.style.color = "green";
    }
    else if (myNumber > randNumber && !isCorrectGuess){
        result.innerHTML = "Try lower!";
        result.style.color = "red";
    }
    else if (myNumber < randNumber && !isCorrectGuess){
        result.innerHTML = "Try higher!";
        result.style.color = "red";
    }
}