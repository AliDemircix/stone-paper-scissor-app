const game = () => {
    let scoreP=0;
    let scoreC=0;

    const startGame = () => {
        const playBtn = document.querySelector('.play-btn');
       playBtn.addEventListener('click',()=> {
           const introScreen = document.querySelector('.intro');
           const matchScreen = document.querySelector('.match');
           const scoresScreen = document.querySelector('.scores');
           introScreen.classList.add('fadeOut');
           matchScreen.classList.add('fadeIn');
           scoresScreen.classList.add('fadeIn');
       })
    }

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOption = ["stone","paper","scissors"];
       
        
        

    options.forEach(option => {
        option.addEventListener('click', function () {
           
            const playerSelection = this.innerText;
            playerHand.src=`./img/${playerSelection}.png`;
            console.log(playerSelection);
            const computerHandNumber = Math.floor(Math.random()*3);
            const computerSelection = computerOption[computerHandNumber];
            console.log(computerSelection);
            computerHand.src=`./img/${computerSelection}.png`;
            compareHands(playerSelection, computerSelection);
            
        })
    })

    }
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent =scoreP;
        computerScore.textContent =scoreC;
        if(parseInt(playerScore.textContent)>parseInt(computerScore.textContent)){
            playerScore.style.color="green";
            computerScore.style.color="red";

        }
        else if(parseInt(playerScore.textContent)<parseInt(computerScore.textContent)) {
            playerScore.style.color="red";
            computerScore.style.color="green";
        }
        else if(parseInt(playerScore.textContent)===parseInt(computerScore.textContent)) {
            playerScore.style.color="orange";
            computerScore.style.color="orange";
        }

    };
    const compareHands = (playerSelection, computerSelection) => {
        const winner = document.querySelector('.winner');
        if (playerSelection==="stone"){
            if(computerSelection==="paper"){
                winner.innerText= 'Computer Win';
                winner.style.color="red";
                console.log('Computer Win')
                scoreC++;
                updateScore();
                return;
            }
            else if(computerSelection==="stone") {
                console.log('Tied Game')
                winner.innerText= 'Tied Game';
                winner.style.color="blue";
                return;
            }
            else {
                winner.innerText= 'Player Win';
                winner.style.color="white";
                scoreP++;
                updateScore();
                return;
            }
        }
        else if(playerSelection==="paper"){
            if(computerSelection==="scissors"){
                winner.innerText= 'Computer Win';
                winner.style.color="red";
                scoreC++;
                updateScore();
                console.log('Computer Win')
                return;
            }
            else if(computerSelection==="paper"){
                winner.innerText= 'Tied Game';
                winner.style.color="blue";
                console.log('Tied Game')
                return;
            }
            else {
                console.log('Player Win');
                winner.innerText= 'Player Win';
                winner.style.color="white";
                scoreP++;
                updateScore();
                return;
            }
        }
        else {
            if(computerSelection==="stone"){
                winner.innerText= 'Computer Win';
                winner.style.color="red";
                scoreC++;
                updateScore();
                console.log('Computer Win');
                return;
            }
           else if(computerSelection==="scissors"){
                winner.innerText= 'Tied Game';
                winner.style.color="blue";
                console.log('Tied Game');
                return;
            }
            else {
                winner.innerText= 'Player Win';
                winner.style.color="white";
                scoreP++;
                updateScore();
                console.log('Player Win');
                return;
            }
        }
    

    }

    

    startGame();
   playMatch();
}
game()