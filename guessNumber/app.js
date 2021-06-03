let randomNumber = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;


if(playGame){
   submit.addEventListener("click",(e)=>{
       e.preventDefault();
      let guess=Number(userInput.value);
      if(isNaN(guess)){
         alert("Please enter a valid number");
      }else if(guess<1){
         alert("number is greater than one")
      }else if(guess>500){
         alert("nuber is less than 500")
      }else{
         previousGuesses.push(guess);
         displayGuess(guess);
         checkGuess(guess);
      }
   })
}

function displayGuess(guess){
   userInput.value="";
   guessSlot.innerHTML+=`${guess}`;
   numGuesses++;
   remaining.innerHTML=`${11- numGuesses}`;
}
function checkGuess(guess){
   if(guess===randomNumber){
      displayMessage("Correctly guess number");
      endGame();
   }else if(guess>randomNumber){
      displayMessage("Too High!Try Again")
   }else if(guess<randomNumber){
      displayMessage("Too Low!Try Again");
   }
}
function displayMessage(message){
      lowOrHi.innerHTML=`<h1>${message}</h1>`
}
function endGame(){
   userInput.value="";
   userInput.setAttribute('disabled', '');
   p.classList.add('button');
   p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
   startOver.appendChild(p);
   playGame = false;
   newGame();
}
function newGame(){
   const newGameButton = document.querySelector('#newGame');
   newGameButton.addEventListener('click', function(){
       //Pick a new random number
       randomNumber = parseInt((Math.random()*100)+1);
       previousGuesses = [];
       numGuesses = 1;
       guessSlot.innerHTML = '';
       lowOrHi.innerHTML = '';
       remaining.innerHTML = `${11 - numGuesses}  `;
       userInput.removeAttribute('disabled');
       startOver.removeChild(p);
       playGame = true;
   })
}