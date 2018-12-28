$(document).ready(function() {
    console.log( "ready!" );

    /*  
    user presses any key
    user presented with Word blanks and 10 guesses
    user chooses letters:
        capture user's choice
        convert to LowerCase
    Check if letter in word:
        IS: show letter in Answer blanks --> 
        NOT: show letter is guessed letters card and decrease number of guesses --> 
    user completes word within guees-limit
        alert "you win" --> 
    update win card ++
    user does not complete word within guess-limit
    alert "better luck next time" --> 
     */



// Set vars
var wordChoice =   
[
    "watermelon", "persimmon", "lychee", "pomegranate", "starfruit", "passion fruit", "jack fruit", "pineapple", "mango", "guava", "banana", "coconut", "papaya",
];

const maxGuesses = 10;            // max guesses for player

var guessedLetters = [];        // stores the letters on guessed card
var wordPick;                   // index of the current word in the array
var guessingWord = [];          // this will be the word we actually build to match the rando word
var remainingGuesses = 0;       // guesses left
var gameFinish = false;         // fires off alerts     
var wins = 0;                   // win count


// Reset vars
function resetGame() {
    remainingGuesses = maxGuesses;

    //finding indices
    wordPick = Math.floor(Math.random() * (wordChoice.length));

    // clearing arrays
    guessedLetters = [];
    guessingWord = [];

    // word guess and ____
    for (var i = 0; i < wordChoice[wordPick].length; i++) {
        guessingWord.push("_");
    }

    updateDisplay(); 
};


function updateDisplay() {
    
    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }

    document.getElementById("num-Wins").innerText = wins;
    document.getElementById("word-Para").innerText = guessingWordText;
    document.getElementById("num-Left").innerText = remainingGuesses;
    document.getElementById("bad-Guess").innerText = guessedLetters;
};



function evaluateGuess(letter) {
    
    var positions = [];

    for (var i = 0; i < wordChoice[wordPick].length; i++) {
        if(wordChoice[wordPick][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
    } else {

        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        wins++;
        gameFinish = true;
        alert("You WIN!")
    }
};



function checkLoss() {
    if(remainingGuesses <= 0) {
        gameFinish = true;
        alert("Better luck next time...")
    }
};


function makeGuess(letter) {
    if (remainingGuesses > 0) {
    
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
};



document.onkeyup = function(event) {

    if(gameFinish) {
        resetGame();
        gameFinish = false;
    } else {
        
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            
            makeGuess(event.key.toLowerCase());
            updateDisplay();
            checkWin();
            checkLoss();
        }
    }
};

});