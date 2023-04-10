
window.addEventListener("load", function() {
const play = document.querySelector('.play');
play.addEventListener('click', function(e){

document.getElementById('start').style.visibility = "hidden";
document.getElementById('game').style.visibility = "visible";

});
});
  
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  randIndex = Math.floor(Math.random() * choice.length);
  return choice[randIndex];
}

function playRound(player, computer) {
  if (computer == player)
  {
    return "Tie";
  } 
  else if (computer == "rock" && player == "paper") 
  {
    return "You win!";
  } 
  else if (computer == "rock" && player == "scissors") 
  {
    return "You lose!!";
  } 
  else if (computer == "scissors" && player == "paper") 
  {
    return "You lose!!";
  } 
  else if (computer == "paper" && player == "rock") 
  {
    return "You lose!!";
  } 
  else if (computer == "scissors" && player == "rock") 
  {
    return "You win!";
  } 
  else if (computer == "paper" && player == "scissors") 
  {
    return "You win!";
  }
}




function game() {
  let computer = 0;
  let player = 0;
  let round = 1;
  

  
  
  


    const buttonsContainer = document.querySelector('.rps');
    const emo = document.getElementsByClassName('emoji');
    buttonsContainer.addEventListener('click', function(event) {
    const playerSelection = event.target.id;
    

    if (!playerSelection) return; // Ignore clicks on container that are not on buttons
    
    if (playerSelection == "scissors"){
      emo[0].innerHTML = "&#9996;";
    }
    else if (playerSelection == "rock"){
      emo[0].innerHTML = "&#9994;";
    }
    else if (playerSelection == "paper"){
      emo[0].innerHTML = "&#9995;";
    }
    const computerSelection = getComputerChoice();
    
    if (computerSelection == "scissors"){
      emo[1].innerHTML = "&#9996;";
    }
    else if (computerSelection == "rock"){
      emo[1].innerHTML = "&#9994;";
    }
    else if (computerSelection == "paper"){
      emo[1].innerHTML = "&#9995;";
    }
    
    const score = playRound(playerSelection, computerSelection);
    console.log(score)
    const comment = document.getElementsByClassName('comment');
    comment[0].innerHTML = score;


  const num = document.getElementsByClassName('num');
  

  
    if (score == "You win!") {
      player++;
      num[0].innerHTML = player;
    } else if (score == "You lose!!") {
      computer++;
      num[1].innerHTML = computer;
    }
    else{
      round--;

    }

    console.log("Player: " + player);
    console.log("Computer: " + computer);
    
    
    
    round++;
    const num2 = document.getElementsByClassName('num2');
    num2[0].innerHTML = round;
    console.log(round)

    if (round % 5 == 0) {
      
      
      
      if (player > computer) {
        
        console.log("You won");
        document.querySelector('.end > .text').innerText = `bruh you are goo00d!! you won ${player} games out of ${round} games wanna keep on playing`;
        
      
      } else {
        console.log("You lost");
        document.querySelector('.end > .text').innerText = `you just lost ${player} games out of ${round} let's keep playing?`;

        
        
      }
      document.querySelector('.end > .play').innerText = "play"
      document.getElementById('game').style.visibility = "hidden";
      document.getElementById('end').style.visibility = "visible"
      
      const play = document.querySelector('.end > .play');
      play.addEventListener('click', function() {
        document.getElementById('end').style.visibility = "hidden"
        document.getElementById('game').style.visibility = "visible";
      })
      
    }
  });
}

game();
