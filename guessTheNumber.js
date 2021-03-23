// player input choices
let levelValue = document.querySelector("#levelValue");
let playButton = document.querySelector("#playButton");
let gameContainer = document.querySelector("#game");
let chosenNum = document.querySelector("#userNum");
let button = document.querySelector("#button");
let triesLeft = document.querySelector("#triesLeft");
let outputNode = document.querySelector("#output");
let reset = document.querySelector("#reset");


// default values for game variables
let gameRangeStart=0;
let gameRangeEnd=0;
let playerGuessesTotal=0;
let playerGuessesLeft = 0;
let randNumber = 0;

reset.style.visibility = "hidden";
gameContainer.style.visibility = "hidden";

// player chosing difficulty  button Event listener
playButton.addEventListener('click', chosingGameLevel);


function chosingGameLevel(){
    let selectedLevel = document.querySelector(".selectedLevel").value;
    let level = document.querySelector(".selectedLevel");
    level.style.visibility = "hidden";
    playButton.style.visibility = "hidden";
    gameContainer.style.visibility = "visible";

    if (selectedLevel === "Easy") {
        console.log(gameRangeEnd);
        console.log(playerGuessesTotal);
        gameRangeStart = 1;
        gameRangeEnd = 10;
        // playerGuessesLeft = 5;
        playerGuessesLeft =Math.ceil(Math.log2(gameRangeEnd));
        
        // playerGuessesTotal = 5;
        playerGuessesTotal = Math.ceil(Math.log2(gameRangeEnd));
        console.log(playerGuessesTotal);
        levelValue.innerHTML = "You've chosen level 1 (Easy): 1-10";
    }
    else if(selectedLevel === "Medium"){
        gameRangeStart = 1;
        gameRangeEnd = 50;
         // playerGuessesLeft = 5;
         playerGuessesLeft =Math.ceil(Math.log2(gameRangeEnd));
        
         // playerGuessesTotal = 5;
         playerGuessesTotal = Math.ceil(Math.log2(gameRangeEnd));
         console.log(playerGuessesTotal);
        levelValue.innerHTML = "You've chosen level 2 (Medium): 1-50";
    }
    else if(selectedLevel === "Hard"){
        gameRangeStart = 1;
        gameRangeEnd = 100;
         // playerGuessesLeft = 5;
         playerGuessesLeft =Math.ceil(Math.log2(gameRangeEnd));
        
         // playerGuessesTotal = 5;
         playerGuessesTotal = Math.ceil(Math.log2(gameRangeEnd));         
        console.log(playerGuessesTotal);
        levelValue.innerHTML = "You've chosen level 3 (Hard): 1-100";
    }
    triesLeft.innerHTML = `You have ${playerGuessesLeft} from ${playerGuessesTotal} tries left`;

    //generate random number
    randNumber = Math.random()*gameRangeEnd + 1;
    randNumber = Math.floor(randNumber);
    console.log(randNumber);
}

button.addEventListener('click', gameLogic);

function gameLogic(){

    outputNode.innerHTML = "The number you've chosen is: " + chosenNum.value;

    //convert the input number from text to number
    let playerGuessNumber = parseInt(chosenNum.value, 10);


    let flag = false; 

    if (playerGuessNumber > gameRangeEnd || playerGuessNumber < gameRangeStart){
        flag = true;

        let result = document.createElement("P");
        result.innerText = "Incorrect range!";
        document.body.appendChild(result);

    }

    if (playerGuessNumber === randNumber && !flag){
        document.querySelector("#level").style.visibility = "hidden";
        gameContainer.style.visibility = "hidden";
        // playerGuessesLeft--;
        // triesLeft.innerHTML = `You have ${playerGuessesLeft} from ${playerGuessesTotal} tries left`;

        let result = document.createElement("P");
        result.innerHTML = "You've guessed the number!";
        result.style.color = "green";
        document.body.appendChild(result);
        //TODO: Must add finish of the game :D
       
    }
    else if (playerGuessNumber > randNumber && !flag){
        
        let result = document.createElement("P");
        result.innerHTML = `You've chosen ${playerGuessNumber}, go lower!`;
        result.style.color = "red";
        document.body.appendChild(result);      
        playerGuessesLeft--;
        triesLeft.innerHTML = `You have ${playerGuessesLeft} from ${playerGuessesTotal} tries left`;


    }
    else if (playerGuessNumber < randNumber && !flag){
        
        let result = document.createElement("P");
        result.innerHTML = `You've chosen ${playerGuessNumber}, go higher!`;
        result.style.color = "red";
        document.body.appendChild(result);

        playerGuessesLeft--;
        triesLeft.innerHTML = `You have ${playerGuessesLeft} from ${playerGuessesTotal} tries left`;


    }
}
