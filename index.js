
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
  
    for (let i = 0; i < 5; i++) 
    {
      const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
      const computerSelection = getComputerChoice();
      const score = playRound(playerSelection, computerSelection);
  
      console.log(score);
  
      if (score == "You win!") 
      {
        player++;
      } 
      else if (score == "You lose!!") 
      {
        computer++;
      }
    }
  
    console.log("Player: " + player);
    console.log("Computer: " + computer);
  
    if (player > computer) 
    {
      console.log("You won");
    } else 
    {
      console.log("You lost");
    }
  }
  
  game();
  