/*  
    user presses start button
    user presented with Word blanks
    user chooses letters:
                            capture user's choice
                            convert to LowerCase
        alert if not within alphabet
    Check if letter in word:
        IS: show letter in Answer blanks --> make short "Yay" sound?
        NOT: show letter is guessed letters card and decrease number of guesses --> Make short "wuhwuh" sound?
    user completes word within guees-limit
        alert "you win" --> play audience cheering sound?
        update win card ++
    user does not complete word within guess-limit
        alert "better luck next time" --> play sad audience sound?
        update loss card ++

*/

// Set vars
var wordChoice = ["watermelon", "persimmon", "lychee", "pomegranate", "starfruit", "passion fruit", "jack fruit", "pineapple", "mango", "guava", "banana", "coconut", "papaya",];
var wordPick = wordChoice[Math.floor(Math.random()*wordChoice.length)];
var winning = 0;
var losing = 0;
var guesses = 10;
var gameOn = false;

// Set document.getElementById() vars for use in functions
var startBtnElem = document.getElementById("start-btn");    //click to begin/reset game
var wordParaElem = document.getElementById("word-Para");    //place for rando word
var numLeftElem = document.getElementById("num-Left");      //number of guesses left
var badGuessElem = document.getElementById("bad-Guess");    //letters not in rando word
var numWinsElem = document.getElementById("num-Wins");      //win record
var numLossElem = document.getElementById("num-Loss");      //loss record






// document.onmousedown(startBtn) = function(event) {
//     console.log(event);
//     wordPara.textContent = event.onmousedown();
// }




// for (i = 0; i < wordChoice.length; i++) {
//     console.log(wordPick);
// }



// document.onkeyup = function () {
//     var userLetter = String.fromCharCode(event.keyCode).toLowerCase();

//     console.log(userLetter);
// };





    // 
    // var possibleLetter = "W A T E R M E L O N";
    // var blanks = "";
    

   
    //     var xLetter = possibleLetter.charAt(i);
    
    //     if (xLetter === " " || xLetter === "/'") {
    //       blanks += xLetter;
    //     } else {
    //       blanks += "_";
    //     }
    //   }
    //   document.getElementById("wordPara").innerHTML = blanks;
    // }
    

