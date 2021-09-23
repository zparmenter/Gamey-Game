


const teenager = {
    name: 'namey name', //window.prompt(`what is your name?`),
    sleepiness: 0,
    boredom: 100,
    coffee: 1
}

let $freshDash = $(`
    <ul>
        <li id='name'>Name: ${teenager.name}</li>
        <li id='sleepiness'>Sleepiness: ${teenager.sleepiness}</li>
        <li id='boredom'>Boredom: ${teenager.boredom}</li>
        <li id='coffee'>Coffee: ${teenager.coffee}</li>
    </ul>
`)
$('.dashboard').append($freshDash);





/*-----------------event listeners---------------*/

const activeGame = {
    game: null,
    id: null,
}


//when mouse pressed. if game is null, make it active and assing gameId as the id. if 

function handleClick(e) {
    
    const gameId = e.target.dataset.target;
    if(activeGame.game === null) {
        $(`#${gameId}`).show(600);
        activeGame.game = true;
        activeGame.id = `#${gameId}`
        // console.log(activeGame.game);
        // console.log(activeGame.id);
        return;
    } else if (activeGame.game === true && activeGame.id === '#sketchGame') {
        $('#sketchGame').hide(600, function() {
            $('.grid-items').remove();
        });
        $('rpsResult').remove();
        activeGame.game = null;
        activeGame.id = null;
        // console.log(activeGame.game);
        // console.log(activeGame.id);
        return;
    } else if (activeGame.game === true && activeGame.id !== $(`#${gameId}`)) {
        $(`${activeGame.id}`).hide(600);
        $('.rpsResult').remove();
        activeGame.game = null;
        activeGame.id = null;
        return; 
        // $(`#${gameId}`).show(600);
    } 

    
    
}

let rpsLoader = document.getElementById('rpsBtn').addEventListener('click', handleClick);

let sketchLoader = document.getElementById('sketchBtn').addEventListener('click', handleClick);

let millionareLoader = document.getElementById('millionareBtn').addEventListener('click', handleClick);

// let rpsLoader = document.getElementById('rpsBtn').addEventListener('click', function() {
//     $('#rpsGame').toggle(600);
//     $('.rpsResult').remove();

// });

// let sketchLoader = document.getElementById('sketchBtn').addEventListener('click', function() {
//     $('#sketchGame').toggle(600, function() {
//         $('.grid-items').remove();
//     });
//     $('.rpsResult').remove();
// });

// let millionareLoader = document.getElementById('millionareBtn').addEventListener('click', function() {
//     $('#millionareGame').toggle(600);
//     $('.rpsResult').remove();
// })



let randoColorBody = document.getElementById('randomColor').addEventListener('click', function() {
    
    $('body').css( 'background-color',  `rgb(${randomColor(0, 255)}, ${randomColor(0, 255)}, ${randomColor(0, 255)})`);
});

let randoEvent = document.getElementById('randomEvent').addEventListener('click', function() {
    blackSwan();
    
});








/*---------------functions------------------*/

function boredomLessener() {

    if(teenager.boredom - 20 <= 0) {
        alert(`You win! Way to not be bored.`);
        location.reload();
    } else {
        teenager.boredom = teenager.boredom - 20;
    }

    let dashBoredom = document.getElementById('boredom');
    dashBoredom.textContent = `Boredom: ${teenager.boredom}`;

} 

function getSleepy() {

    if((teenager.sleepiness + 30) < 100) {
        teenager.sleepiness = teenager.sleepiness + 30;
    } else if((teenager.sleepiness + 30) > 100 && teenager.coffee >= 1) {
        teenager.coffee = teenager.coffee - 1;
        showResult(`Coffee saved you this time. You won't be so lucky next time`);
    } else {
        alert(`You have lost ${teenager.name}. Better luck next time`);
        location.reload();
    }

    let dashSleepiness = document.getElementById('sleepiness');
    dashSleepiness.textContent = `Sleepiness: ${teenager.sleepiness}`;

    let dashCoffee = document.getElementById('coffee');
    dashCoffee.textContent = `Coffee: ${teenager.coffee}`;

}

function randomColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1) + min));
} 

function randomSketchColor() {
    $('#container').css( 'background-color',  `rgb(${randomColor(0, 255)}, ${randomColor(0, 255)}, ${randomColor(0, 255)})`);
}

function blackSwan() {
    let events = [`getSleepy()`, `boredomLessener()`, `randomSketchColor()`];
    let eventIndex = Math.round(Math.random() * events.length);

    if(events[eventIndex] === events[0]) {
        getSleepy();
    } else if (events[eventIndex] === events[1]) {
        boredomLessener();
    } else {
        randomSketchColor();
    }

    
}


/*---------------------------------------------------------------THIS HIDES THE GAMES IN THE DASH-----------------------------------------------------------------*/
$('document').ready(function() {
    $('#rpsGame').hide();
    $('#sketchGame').hide();
    $('#millionareGame').hide();
})


/*-------------------------------------------------------THIS IS ALL OF THE ROCK PAPER SCISSORS FUNCTIONALITY-----------------------------------------------------*/


//This is the rock paper scissors game
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


//this function compares the random computerChoice() to the players chosen choice and spits out who won!
function choiceComparison() {

    computerChoice();

    if(computer.currentChoice === player.currentChoice) {

        showResult(`It's a tie! Play again.`);
    } else if(computer.currentChoice === choices[0]) {
        if(player.currentChoice === choices[1]) {
            boredomLessener();
            showResult(`You win. ${choices[1]} beats ${choices[0]}`);
        } else {
            getSleepy();
            showResult(`You lose. ${choices[2]} does not beat ${choices[0]}`);
        }
    } else if(computer.currentChoice === choices[1]) {
        if(player.currentChoice === choices[2]) {
            boredomLessener();
            showResult(`You win. ${choices[2]} beats ${choices[1]}`);
        } else {
            getSleepy();
            showResult(`You lose. ${choices[0]} does not beat ${choices[1]}`);
        }
    } else if(computer.currentChoice === choices[2]) {
        if(player.currentChoice === choices[0]) {
            boredomLessener();
            showResult(`You win. ${choices[0]} beats ${choices[2]}`);
        } else {
            getSleepy();
            showResult(`You lose. ${choices[1]} does not beat ${choices[2]}`);
        }
    }
}

//this function takes the result of the compareChoices() function and puts a new paragraph on the screen showing the result
function showResult(result) {
    let newResult = document.createElement('p');
    newResult.setAttribute('class', 'rpsResult');
    newResult.textContent = result;
    document.getElementById('resultShower').append(newResult);
}







/*----------------------------------------------------------------THIS IS THE END OF ROCK PAPER SCISSORS-----------------------------------------------------------------*/




/*-----------------------------------------------------------------------THIS IS THE SKETCH GAME------------------------------------------------------------------------*/

const container = document.getElementById("container");



function makeRows(num) {
    container.setAttribute('class', 'madeAlready')
    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);
    for (c = 0; c < (num * num); c++) {
        var cell = document.createElement("div");
        cell.textContent = '.';
        container.appendChild(cell).id = "grid-item" + c;
        let test = document.getElementById('grid-item' + c);
        test.addEventListener('mouseover', function() {
            test.className = 'grid-items';
        });
    }
};


makeRows(45);








/*----------------------------------------------------------THIS IS THE END OF SKETCH GAME--------------------------------------------------------------*/


/*---------------------------------------------------------THIS IS THE START OF MILLIONARE GAME---------------------------------------------------------------*/

let total = document.getElementById('futureValue').addEventListener('click', function() {

    
    showFutureValue();

})



function showFutureValue() {
    let presentValue = $('#presentValue').val(); 
    let r = ($('#annualInterest').val() / 100);
    let t = $('#numOfYears').val();
    let PMT = ($('#monthlyInvestment').val());

    let futureValue = (presentValue * (1 + r/12)**(t*12));
    let fvWithDepo = futureValue + PMT * (((1 + r/12)**(t*12) -1) / (r/12))
    let pubView = fvWithDepo.toFixed(2).toLocaleString();

    if(fvWithDepo < 1000000) {
        getSleepy();
        showResult(`Anything less than a million dollars is extremely boring...Don't fall asleep.`);
        showResult(new Intl.NumberFormat().format(pubView));
    } else {
        showResult(`#compounding`);
        showResult(new Intl.NumberFormat().format(pubView));
    }
    
    
}

/*------------------------------------------------------THIS IS THE END OF MILLIONARE GAME-----------------------------------------------------------------*/




