let player1Score = document.getElementById("player1")
let compScore = document.getElementById("player2")

let player_hand = document.getElementById("player-hand")
let computer_hand = document.getElementById("computer-hand")

let rock_btn = document.getElementById("rock_btn")
let paper_btn = document.getElementById("paper_btn")
let scissors_btn = document.getElementById("scissors_btn")

let gameover = document.getElementById("gameover")
let winOrLoss = document.getElementById("winOrLoss")

let playAgain = document.getElementById("playAgain")

let rock = 'assets/rock-hand.png'
let paper = 'assets/paper-hand.png'
let scissor = 'assets/scissors-hand.png'

let playerScore = 0
let ComputerSocre = 0

let random = [rock,paper,scissor]
let player ;
let computer;

function computerHand(){
    let randomHand = random[Math.floor(Math.random()*random.length)];
    computer_hand.src= randomHand
    computer = randomHand
}
rock_btn.onclick =()=>{
    player_hand.src = rock;
    player = rock
    computerHand()
    Compare()
    
}
paper_btn.onclick =()=>{
    player_hand.src = paper;
    player = paper
    computerHand()
    Compare()
}
scissors_btn.onclick=()=>{
    player_hand.src = scissor
    player = scissor
    computerHand()
    Compare()
}
function Compare(){
    if(player == rock && computer== scissor){
        playerScore++;
    }
    else if(player==rock && computer== paper ){
        ComputerSocre++
        
    }
    if(player==paper && computer== rock ){
        playerScore++
        
    }
    else if(player==paper && computer== scissor ){
        ComputerSocre++
     
    }
    if(player==scissor && computer== paper ){
        playerScore++
       
    }
    else if(player==scissor && computer== rock ){
        ComputerSocre++
        
    }
    player1Score.innerText = playerScore
    compScore.innerText = ComputerSocre
    if(playerScore == 5){
        gameover.style.display = 'block'
        winOrLoss.innerText = 'You won the game'
        location.href = "#gameover"
    }
    else if(ComputerSocre == 5){
        gameover.style.display = 'block'
        winOrLoss.innerText = 'Computer won the game'
        location.href = "#gameover"
    }
}
playAgain.onclick=()=>{
    location.reload()

}


