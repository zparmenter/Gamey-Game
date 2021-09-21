console.log('sanity');


const teenager = {
    name: 'Zach',//window.prompt(`what is your name?`),
    sleepiness: 0,
    boredom: 100,
    coffee: 1
}

console.log(teenager);

document.getElementById('test').addEventListener('click', function() {
    

        

        $('#rpsGame').toggle(1000);
        $('.rpsResult').remove();

        
    
    // boredomLessener();
    // let dashSleepiness = document.getElementById('sleepiness');
    // dashSleepiness.textContent = `Sleepiness: ${teenager.sleepiness}`;

    // let dashBoredom = document.getElementById('boredom');
    // dashBoredom.textContent = `Boredom: ${teenager.boredom}`;

    // let dashCoffee = document.getElementById('coffee');
    // dashCoffee.textContent = `Coffee: ${teenager.coffee}`;
});

function boredomLessener() {
    teenager.boredom = teenager.boredom - 20;
    teenager.sleepiness = teenager.sleepiness + 20;

    
    let dashSleepiness = document.getElementById('sleepiness');
    dashSleepiness.textContent = `Sleepiness: ${teenager.sleepiness}`;

    let dashBoredom = document.getElementById('boredom');
    dashBoredom.textContent = `Boredom: ${teenager.boredom}`;

    let dashCoffee = document.getElementById('coffee');
    dashCoffee.textContent = `Coffee: ${teenager.coffee}`;



} 





/*-------------------------------------------------------THIS IS ALL OF THE ROCK PAPER SCISSORS FUNCTIONALITY-----------------------------------------------------*/


//This is the rock paper scissors game
let rpsToggle = document.getElementById('rpsGame')

//these are the two objects, the user is the player and the computer is the computer
const player = {
    currentChoice: null
}

const computer = {
    currentChoice: null
}

//this is the array with the three possible choices for rock paper scissors
let choices = ['Rock', 'Paper', 'Scissors'];


//this function generates a random choice for the computer since there isn't another user who is doing it
function computerChoice() {
    let randomChoice = Math.round(Math.random() * choices.length);
    computer.currentChoice = choices[randomChoice];
    //console.log(computer.currentChoice);
}


//these are the player choices' buttons. Because the user is actulaly playing, they get to click on a choice which runs the compare choices
//function below which actually decides who wins. 
let pchoice1 = document.getElementById('rock').addEventListener('click', function() {
    player.currentChoice = choices[0];
    choiceComparison();
})

let pchoice2 = document.getElementById('paper').addEventListener('click', function() {
    player.currentChoice = choices[1];
    choiceComparison();
})

let pchoice3 = document.getElementById('scissors').addEventListener('click', function() {
    player.currentChoice = choices[2];
    choiceComparison();
})

computer.currentChoice = choices[0];
// choiceComparison();

//this function compares the random computerChoice() to the players chosen choice and spits out who won!
function choiceComparison() {

    //computerChoice();

    if(computer.currentChoice === player.currentChoice) {

        showResult(`It's a tie! Play again.`);
    } else if(computer.currentChoice === choices[0]) {
        if(player.currentChoice === choices[1]) {
            boredomLessener();
            showResult(`You win. ${choices[1]} beats ${choices[0]}`);
        } else {
            showResult(`You lose. ${choices[2]} does not beat ${choices[0]}`);
        }
    } else if(computer.currentChoice === choices[1]) {
        if(player.currentChoice === choices[2]) {
            showResult(`You win. ${choices[2]} beats ${choices[1]}`);
        } else {
            showResult(`You lose. ${choices[0]} does not beat ${choices[1]}`);
        }
    } else if(computer.currentChoice === choices[2]) {
        if(player.currentChoice === choices[0]) {
            showResult(`You win. ${choices[0]} beats ${choices[2]}`);
        } else {
            showResult(`You lose. ${choices[1]} does not beat ${choices[2]}`);
        }
    }
}

//this function takes the result of the compareChoices() function and puts a new paragraph on the screen showing the result
function showResult(result) {
    let newResult = document.createElement('p');
    newResult.setAttribute('class', 'rpsResult');
    newResult.textContent = result;
    document.body.append(newResult);
}












